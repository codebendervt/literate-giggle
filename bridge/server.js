import { serve } from "https://deno.land/std@0.125.0/http/server.ts";
import API from './api/index.ts'

const port = 8080;


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
        //need to add support for being able to handle the base path


        // for adding support for authorization
        // console.log('headers',request.headers.get('authorization'));
        let url = new URL(request.url)

        let urlPaths = url.pathname.split('/')

        // const headers = {...request.headers};
        // console.log(request.headers.get('authorization'))
        if(request.method == 'GET'){
            let _response  = await apiHandler({API,urlPaths,request});
            response = await new Response(JSON.stringify(_response), {
                headers:{
                    "access-control-allow-origin": "*",
                    "content-type": "application/json"
                },
                status: 200 });

        }else if(request.method == 'POST'){
            const data = await request.json()
            let _response  = await apiHandler({API,urlPaths,data});
            response = new Response(JSON.stringify((_response)), {
                headers:{
                    "access-control-allow-origin": "*",
                    "content-type": "application/json"
                },
                status: 200 });
        }

    }catch(err){
        // look into support for logging service or build own
        let msg = 'Route does not exist';
        // if(err.message.includes('Cannot read')){
        //     msg = 'Route does not exist'
        // }
        return new Response(JSON.stringify({status:'error', msg}), {
            headers:{
                "access-control-allow-origin": "*",
                "content-type": "application/json"
            },
            status: 404 });;
    }

    return response;
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });