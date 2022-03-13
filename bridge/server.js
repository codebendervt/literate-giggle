import { serve } from "https://deno.land/std@0.125.0/http/server.ts";
import API from './api/index.ts'

const port = 8080;


const apiHandler =(API, urlPaths,data) => {
    let apiCall = API[urlPaths[1]]['index'];


    const hasFunction = urlPaths.length > 2
    //
    if(hasFunction)
        apiCall =  API[urlPaths[1]][urlPaths[2]];


    return  data ? apiCall(data) :apiCall();
}

const handler = async (request) => {
    let response;

    try{
        //need to add support for being able to handle the base path


        // for adding support for authorization
        // console.log('headers',request.headers.get('authorization'));
        let url = new URL(request.url)


        let urlPaths = url.pathname.split('/')


        if(request.method == 'GET'){
            response = new Response(JSON.stringify(apiHandler(API,urlPaths)), {
                headers:{
                    "content-type": "application/json"
                },
                status: 200 });

        }else if(request.method == 'POST'){
            const data = await request.json()

            response = new Response(JSON.stringify((apiHandler(API,urlPaths,data))), {
                headers:{
                    "content-type": "application/json"
                },
                status: 200 });
        }

    }catch(err){
        // look into support for logging service or build own
        return new Response(JSON.stringify({status:'error', msg:err.message}), {
            headers:{
                "content-type": "application/json"
            },
            status: 404 });;
    }

    return response;
};

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`);
await serve(handler, { port });