import webPush from 'https://esm.sh/web-push?no-check';
const env = Deno.env.toObject()



const index = async () => {

    // if (!env.VAPID_PUBLIC_KEY || !env.VAPID_PRIVATE_KEY) {
    //     console.log("You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY "+
    //         "environment variables. You can use the following ones:");
    //     console.log(webPush.generateVAPIDKeys());
    //     return;
    // }

    return {status: 200, key:env.VAPID_PUBLIC_KEY || 'BKam0YMDX-Nl83wHm7r9EJ-071i7qOPbd8CAZgM5fLU7X_zSXqtgI1JiRVoDrcINsYyCwc_FOSkuE4Y7pagAPLI'}
}

const register = async (data:any) => {


    return {status: 200, msg:'subscribed'}

}


export default {index, register}