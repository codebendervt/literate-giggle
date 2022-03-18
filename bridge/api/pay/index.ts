import {getUriParams} from '../../../sdk/services/native/index.js';
const env = Deno.env.toObject();

//figure out what is the env
const _uri = 'https://api.paystack.co/'
let key = env.PAYSTACK_SECRET_KEY || 'sk_live_065943ad1e728f6544f009ab7e0ea4d20f1671fb';


const paystack_api = {
    verify : 'transaction/verify/',
    update_log: 'transaction/update_log/'
}

const _fetch = async ({uri = _uri, data = {}, method = 'POST'}) => {
    let options = {};

    if(Object.keys(data).length !== 0){
        options = {body: JSON.stringify(data)}
    }


    console.log(key)
    const _response =  await fetch(uri,
        {
            method, // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${key} `,
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            ...options // body data type must match "Content-Type" header)
        });

    return await _response.json()
}

const index = async (data:JSON, req:any) => {

    let response = {};
    const uri = `${_uri}charge`
    response = await _fetch({uri, data});

    return response;
}

const log = async(data:any, req:any) => {

    let response = {};

    const trans_uri = `${_uri}${paystack_api.verify}${data['ref']}`;
    const trans =  await _fetch({uri:trans_uri, method:'GET'});
    const trans_id = trans['data']['id'];


    key = 'pk_live_96a344b63e2a275b9f990806e75e06806f4b4875'
    const uri =  `${_uri}${paystack_api.update_log}${trans_id}`
    const _data = {payload: data['payload']}

    response =  await _fetch({uri, data:_data});
    return response;
}

const verify = async (req:any) => {

    let response = {};
    console.log();

    // let url = new URL(req.url)
    // let searchParams = new URLSearchParams(url.search);
    // searchParams.get('ref')
    let ref = getUriParams({uri : req.url, query:'ref'})

    const uri = `${_uri}${paystack_api.verify}${ref}`

    const method = req.method;
    response = await _fetch({uri, method});
    return response;
}


export default {index,verify,log}