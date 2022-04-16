import bye from './bye';
import bala from './bala';
import dash from './dash';
import form from './form';
import service from 'local-service';
import {useEffect,useState} from 'react';
import package_json from '../package.json'

const index  = ({param}) => {

    const [org, setOrg] = useState();

    useEffect( async () => {
        try{
            // console.table(package_json.version)

            if(param){
                console.log(param)
                const _org =  await service.backend.Config.get(param)

                const _org_data = JSON.parse(_org.data)
                //
                if(_org.data)
                    window.location = `https://api.whatsapp.com/send?phone=${_org_data.primary_contact_phone}&text=I%20would%20like%20buy%20your%20product`
            }

        }catch(err){

            const log = {
                title: 'Home Page',
                msg: err.message
            }
            const res = await fetch(`${process.env.PROD_API}logger`,{
                method: 'POST',
                body:JSON.stringify(log)
            })
            const _res = await res.json()

            console.log('unable to find customer',_res)
        }

    },[])

    //https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API


    function notifyMe() {
        const checkNotificationPromise = () => {
            // set the button to shown or hidden, depending on what the user answers
            if(Notification.permission === 'denied' || Notification.permission === 'default') {
                return false
            } else {
                return true
            }
        }

        // Let's check if the browser supports notifications
        if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        }


        // Let's check whether notification permissions have already been granted
        else if (checkNotificationPromise()) {
            // If it's okay let's create a notification
            var notification = new Notification("Hi there!",{body:'were trying something new '});
            console.log(notification)
        }

        // Otherwise, we need to ask the user for permission
        else if (!checkNotificationPromise()) {
            Notification.requestPermission().then(function (permission) {
                // If the user accepts, let's create a notification
                if (permission === "granted") {
                    var notification = new Notification("Hi there!");
                }
            });
        }

        // At last, if the user has denied notifications, and you
        // want to be respectful there is no need to bother them any more.
    }

    // useEffect(async () => {
    //     console.log(await service.backend.Config.get('hello'),'getting data')
    // },[])

    return (
        <div className={'w-screen h-screen flex items-center justify-center lg:flex-row bg-black text-white'}>

            <div className={'text-2xl font-bold animate flex flex items-center '}>
                {param ?
                <div className={'flex flex-col items-center'}>
                    <span className={'animate__animated animate__fadeIn text-xs '}>welcome to</span>
                    <div className={'text-xl animate__animated animate__fadeIn animate__delay-1s'}> {param}</div>

                </div>
                    :
                    <div className={'flex flex-col items-center'}>
                        <span className={'animate__animated animate__fadeIn text-xs'}>welcome to</span>
                        <div onClick={notifyMe} className={'text-2xl  animate__animated animate__fadeIn animate__delay-1s'}> sauveurhq</div>
                    </div>
                }

            </div>
        </div>)
}

const error = () => {
    return(
        <>404</>
    )
}



export default {index, dash, bye, bala, form,error}
