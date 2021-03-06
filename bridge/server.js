import { serve, serveTls } from "https://deno.land/std@0.135.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.135.0/http/file_server.ts";

import { decryptMessage } from "./.core/security.js";
import API from "./api/index.ts";


const env = Deno.env.toObject();

const isDev = env.DENO_ENV === "dev"
const isDenoDeploy = env.IS_DEPLOY  === "yes"
const port = isDev ? 8080 : 80;


const addCorsIfNeeded = (response) => {
  const headers = new Headers(response.headers);

  if (!headers.has("access-control-allow-origin")) {
    headers.set("access-control-allow-origin", "*");
  }

  return headers;
};

const apiHandler = async ({ API, urlPaths, data, request }) => {
  let apiCall;
  const req = request;

  if (urlPaths[1] === "") {
    //    return html page
    apiCall = API["index"];
  } else {
    apiCall = API[urlPaths[1]]["index"];
  }

  const hasFunction = urlPaths.length > 2;
  //
  if (hasFunction) {
    apiCall = API[urlPaths[1]][urlPaths[2]];
  }

  return data ? apiCall(data, req) : apiCall(req);
};

const handler = async (request) => {
  let response;
  let dir = `./bridge/static`


  try {

    const { pathname } = new URL(request.url);
    const _current_header = new Headers(request.headers);
    console.log(request.headers.get("host"));

    if (pathname == '/update') {
      console.log(pathname,'ready to update')
          return new Response(JSON.stringify({status:'error', msg:'update under construction'}), {
        headers:{
            "content-type": "application/json",
            "Referrer-Policy": "no-referrer",
            "access-control-allow-origin": "*"
        },
        status: 404 });
    }

    if (request.headers.get("upgrade") === "websocket") {
      const { socket: ws, response } = Deno.upgradeWebSocket(request);

      const handleConnected = () => console.log("Connection established");
      ws.onopen = () => handleConnected();

      const handleDisconnected = () => console.log("Connection closed");
      ws.onclose = () => handleDisconnected();

      const handleError = (e) =>
        console.log(e instanceof ErrorEvent ? e.message : e.type);
      ws.onerror = (e) => handleError(e);

      const handleMessage = (ws, msg) => {
        ws.send("You have a new message");
        console.log(msg);
      };

      ws.onmessage = (e) => handleMessage(ws, e.data);

      console.log("created websocket connection as ws://localhost:8000");
      return response;
    }

    if (_current_header.has("type")) {
      if (request.headers.get("type") === "api") {
        //need to add support for being able to handle the base path
        const corsHeaders = addCorsIfNeeded(new Response());

        // for adding support for authorization
        // console.log('headers',request.headers.get('authorization'));


        let urlPaths = pathname.split("/");

        // const headers = {...request.headers};
        // console.log(request.headers.get('authorization'))

        if (request.method == "GET") {
          let _response = await apiHandler({ API, urlPaths, request });

          response = await new Response(JSON.stringify(_response), {
            headers: {
              "content-type": "application/json",
              "Referrer-Policy": "no-referrer",
            },
            status: _response.status,
          });

        } else if (request.method == "POST") {
          // request.json()
          const _data = await request.arrayBuffer();
          const data = await decryptMessage(_data);

          let _response = await apiHandler({ API, urlPaths, data });
          response = new Response(JSON.stringify(_response), {
            headers: {
              "content-type": "application/json",
            },
            status: 200,
          });
        }

        
      }
    } else {
        // const file = await Deno.readFile("./static/style.css");
        // Respond to the request with the style.css file.
     
        if(isDev){
            // Deno.chdir("../");
            dir = `dist`
        }

      // Check if the request is for style.css.
   
      if (pathname.includes(".")) {
        console.log(pathname)
        return await serveFile(request, `${dir}${pathname}`);
      }
 
      return await serveFile(request, `${dir}/index.html`);
    }
  } catch (err) {
    // look into support for logging service or build own
    // we will send it from here to our custom logger
    console.log(err);
    let msg = "Route does not exist";

    if (!err.message.includes("Cannot read properties of undefined ")) {
      msg = err.message;
    }

    return await serveFile(request, `${dir}/404.html`);
  }

  if (!response.headers.has("access-control-allow-origin")) {
    response.headers.set("access-control-allow-origin", "*");
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
    );
  }

  return response;
};

if(isDev || isDenoDeploy){
  console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);
await serve(handler, { port });
}else{
  console.log(`HTTP webserver running. Access it at: https://localhost:443/`);
  const options = {
    port: 443,
    certFile: "/etc/letsencrypt/live/bridge.sauveur.xyz/fullchain.pem",
    keyFile: "/etc/letsencrypt/live/bridge.sauveur.xyz/privkey.pem",
  };
  await serveTls(handler,options);

}
