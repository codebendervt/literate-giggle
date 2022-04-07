// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const webPush = require('web-push');


export default function handler(req, res) {
    // Set the keys used for encrypting the push messages.
    const auth  = webPush.setVapidDetails(
        'https://serviceworke.rs/',
        'BKam0YMDX-Nl83wHm7r9EJ-071i7qOPbd8CAZgM5fLU7X_zSXqtgI1JiRVoDrcINsYyCwc_FOSkuE4Y7pagAPLI',
        '_ejp58ylvxV4KcC2v3HIHQV8jlk6Zx9ZZpSGB9aLx6A'
    );

    console.log(auth)
    const subscription = req.body.subscription;
    const payload = null;
    const options = {
        TTL: req.body.ttl
    };


    webPush.sendNotification(subscription, payload, options)
        .then(function() {
            console.log('success')
            res.status(201)
        })
        .catch(function(error) {
            console.log('error',error)
            res.status(500)
            console.log(error);
        });


}
