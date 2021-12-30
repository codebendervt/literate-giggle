import {useEffect} from "react";
import {client, q} from "../../sdk/services/fauna";

const App  = () => {
    useEffect(() => {

        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => console.log(data));


        // async function postData(url = '', data = {}) {
        //     // Default options are marked with *
        //     const response = await fetch(url, {
        //         method: 'GET', // *GET, POST, PUT, DELETE, etc.
        //         mode: 'cors', // no-cors, *cors, same-origin
        //         // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //         // credentials: 'same-origin', // include, *same-origin, omit
        //         headers: {
        //             'Content-Type': 'application/json',
        //             // 'Authorization': 'Bearer sk_test_f6de4234406cfea2f9a4250b02f7aa8d3353c817',
        //             //'Authorization': 'Bearer sk_live_f286307ff4aaf52c694a252be17154cae732d071',
        //         },
        //
        //         // redirect: 'follow', // manual, *follow, error
        //         // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //         //body: JSON.stringify(data) // body data type must match "Content-Type" header
        //     });
        //     return response.json(); // parses JSON response into native JavaScript objects
        // }


        // let res = postData('https://api.ipify.org?format=json');
        // let res = postData('https://api.paystack.co/transaction/verify/7ed6s0gnmgaqvgu');
        // https://api.paystack.co/transaction/verify/7ed6s0gnmgaqvgu
        // let res = postData('https://api.paystack.co/transaction/initialize', {
        //     amount: 100,
        //     email: 'rawk@paystack.com'
        // })

        // let res = postData('https://api.paystack.co/charge/', {
        //     amount: 100,
        //     email: 'rawk@paystack.com'
        // })

        // let res = postData('https://api.paystack.co/charge',{
        //     email: 'rawk@sauveur.xyz',
        //     amount: 10,
        //     currency: 'ZAR',
        //     card: {
        //         cvv: '070',
        //         number: '4847958208686707',
        //         expiry_month: '05',
        //         expiry_year: '26'
        //     }
        // })


        // let createP = client.query(
        //     q.Create(
        //         q.Collection('test'),
        //         { data: { testField: 'testValueAgain' } }
        //     )
        // )
        //  console.log(res)
    },[])

    return(
        <div className={'w-screen h-screen bg-black text-white flex justify-center items-center p-2'}>

            <div className={"w-full h-screen flex flex-col"}>
                <div className={'w-full h-auto flex flex-grow items-center justify-center'}>
                   <p>
                       The Dev House In Your Pocket
                   </p>
                </div>

            </div>
        </div>
    )
}

export  default App;