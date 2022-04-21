import { render } from "react-dom";
import { useEffect,useState } from "react";
import {App, services} from '../core'
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
        console.log(services.dfinity.backend.get_all_data())
    },[])

 


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
 
        <App.Core pages={pages} hasBar={true}></App.Core>
        )

}

render(
    <Layout/>, document.getElementById("root")
);