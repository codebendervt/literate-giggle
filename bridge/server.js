import { serve } from "https://deno.land/std@0.125.0/http/server.ts";
import { decryptMessage } from "./.core/security.js";
import API from './api/index.ts'

const port = 8080;

const addCorsIfNeeded = (response) => {
    const headers = new Headers(response.headers);

    if (!headers.has("access-control-allow-origin")) {
        headers.set("access-control-allow-origin", "*");
    }

    return headers;
}

const apiHandler = async ({API, urlPaths,data,request}) => {

    let apiCall;
    const req = request;

    if(urlPaths[1] === ""){
        //    return html page
        apiCall = API['index']
    }else{
        apiCall = API[urlPaths[1]]['index']
    }

    const hasFunction = urlPaths.length > 2
    //
    if(hasFunction)
        apiCall =  API[urlPaths[1]][urlPaths[2]];


    return  data ? apiCall(data,req) : apiCall(req);
}

const handler = async (request) => {
    let response;

    try{

        console.log(request.headers.get("host"))
        console.log(request)
  
        if (request.headers.get("upgrade") === "websocket") {
            const { socket: ws, response } = Deno.upgradeWebSocket(request);

            const handleConnected = () => console.log("Connection established");
            ws.onopen=()=>handleConnected();

            const handleDisconnected = () => console.log("Connection closed");
            ws.onclose=()=>handleDisconnected()

            const handleError = e => console.log(e instanceof ErrorEvent ? e.message : e.type);
            ws.onerror=e=>handleError(e);

            const handleMessage = (ws, msg) => {
                ws.send('You have a new message');
                console.log(msg);
            }

            ws.onmessage=e=>handleMessage(ws, e.data);

            console.log('created websocket connection as ws://localhost:8000')
            return response;
        }

        //need to add support for being able to handle the base path
        const corsHeaders = addCorsIfNeeded(new Response());

        // for adding support for authorization
        // console.log('headers',request.headers.get('authorization'));

        const { pathname } = new URL(request.url);

        let urlPaths = pathname.split('/')

        // const headers = {...request.headers};
        // console.log(request.headers.get('authorization'))
        if(request.method == 'GET'){
            let _response  = await apiHandler({API,urlPaths,request});

            if (pathname.startsWith("/push")) {
                response =  new Response(_response,{
                    headers:{
                        "content-type": "text/event-stream",
                    },
                    status: 200 });
            }else{
                response = await new Response(JSON.stringify(_response), {
                    headers:{
                        "content-type": "application/json",
                        "Referrer-Policy": "no-referrer"
                    },
                    status: 200 });
            }


        }else if(request.method == 'POST'){
            // request.json()
            const _data = await request.arrayBuffer()
            const data = await decryptMessage(_data);

            let _response  = await apiHandler({API,urlPaths,data});
            response = new Response(JSON.stringify((_response)), {
                headers:{
                    "content-type": "application/json",
                },
                status: 200 });
        }

    }catch(err){
        // look into support for logging service or build own
        console.log(err)
        let msg = 'Route does not exist';
        if(!err.message.includes('Cannot read properties of undefined ')){
         msg = err.message
        }

        return new Response(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title> error</title>
            <meta property="og:title" content="error">
            <meta property="og:description" content="There is an error on this page">
            <meta property="og:image" content="https://bldka-cyaaa-aaaah-aaq3a-cai.raw.ic0.app/background.png">
            <meta property="og:image" content="../assets/background.png">
            <meta property="og:url" content="https://bldka-cyaaa-aaaah-aaq3a-cai.raw.ic0.app/">
        

            <meta name="twitter:title" content="error">
            <meta name="twitter:description" content="there is an error on this page">
            <meta name="twitter:image" content="https://bldka-cyaaa-aaaah-aaq3a-cai.raw.ic0.app/background.png">
            <meta name="twitter:card" content="summary_large_image">
            <meta http-equiv="refresh" content="0; url=https://bldka-cyaaa-aaaah-aaq3a-cai.raw.ic0.app" />
          </head>
          <body>
          We are looking into the problem
          ${msg}
          </body>
        <html>
        `, { headers: { "content-type": "text/html" } })

        // return new Response(JSON.stringify({status:'error', msg}), {
        //     headers:{
        //         "content-type": "application/json",
        //         "Referrer-Policy": "no-referrer",
        //         "access-control-allow-origin": "*"
        //     },
        //     status: 404 });
    }


    if (!response.headers.has("access-control-allow-origin")) {
        response.headers.set("access-control-allow-origin","*");
        response.headers.set("Access-Control-Allow-Headers","Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    }


    return response;
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });