import { render } from "react-dom";
import { useEffect,useState } from "react";
import Studio from '../core'
import { decryptMessage, encryptMessage } from "./src/security";
import {push_notification} from './src/test'
import pages from './src'

const model = [
    {type: 'input',name:'primary_contact_phone',title:'Whatsapp Number', values:{placeholder:'Whatsapp Number', type:'tel'}},
    {type: 'input',name:'name',title:'Your Name', values:{placeholder:'Your Name', type:'tel'}}

]
const Layout = () => {

    const [sub, setSub] = useState()


    useEffect(async () => {

        console.log(pages)
        // const myArray = new Uint8Array(10);

        // const msg = {data:'hellow world'}
        
        // let _encrypted
        // //Uint8Array
        // _encrypted =  await encryptMessage(JSON.stringify(msg));
        // // console.log(await decryptMessage(_encrypted));

        // console.log(_encrypted)
        // fetch('/push', {
        //     method: 'POST',
        //     body: _encrypted
        // })

        // const socket = new WebSocket("ws://clear-donkey-10-7cvv1r7bn5q0.deno.dev");
        //
        //
        // // Connection opened
        // socket.addEventListener('open', function (event) {
        //     socket.send('Hello Server Again!');
        // });
        //
        // // Listen for messages
        // socket.addEventListener('message', function (event) {
        //     console.log('Message from server ', event.data);
        // });

        // const subscription = await push_notification()
        // setSub(subscription)


    },[])

    function checkNotificationPromise() {
        try {
            Notification.requestPermission().then();
        } catch(e) {
            return false;
        }

        return true;
    }

    function askNotificationPermission() {
        // function to actually ask the permissions
        function handlePermission(permission) {
            // set the button to shown or hidden, depending on what the user answers
            if(Notification.permission === 'denied' || Notification.permission === 'default') {
                console.log('denied');
            } else {
                var img = '/to-do-notifications/img/icon-128.png';
                var text = 'HEY! Your task "' + 'twek' + '" is now overdue.';
                var notification = new Notification('To do list', { body: text, icon: img });
            }
        }

        // Let's check if the browser supports notifications
        if (!('Notification' in window)) {
            console.log("This browser does not support notifications.");
        } else {
            if(checkNotificationPromise()) {
                Notification.requestPermission()
                    .then((permission) => {
                        handlePermission(permission);
                    })
            } else {
                Notification.requestPermission(function(permission) {
                    handlePermission(permission);
                });
            }
        }
    }


    const handleSubmit = () => {

        console.log(sub)
        // askNotificationPermission()

        if(sub){
            fetch('/api/push', {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    subscription: sub,
                    delay: 1,
                    ttl: 0,
                }),
            });
        }

        console.log('submiting')
    }
    return(
        // <div className={'w-full h-screen bg-black '}>
        //   <Studio.Form submitHandler={handleSubmit} formConfig={model}/>
        // </div>
 
        <Studio.App.Core pages={pages}></Studio.App.Core>
        )

}

render(
    <Layout/>, document.getElementById("root")
);