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
    
    const SubView = ({toggle}) => {
        return (<>
        hello world
        <div onClick={() => toggle()}>close</div>
        </>)
    }
    return(
        // <div className={'w-full h-screen bg-black '}>
        //   <Studio.Form submitHandler={handleSubmit} formConfig={model}/>
        // </div>
 
        <App.Core pages={pages} hasBar={true}>
            <div>hello</div>
            <div>
                {/* <div id="one" icon='meal' value="one" subPage={SubView}>one</div>
                <div id="two" icon='meal' value="app" route={'/app'}>two</div> */}
                <div id="home" icon='home' value="home" isHome={true}/>
            </div>
        </App.Core>
        )

}

render(
    <Layout/>, document.getElementById("root")
);