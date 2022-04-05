import { render } from "react-dom";
import { useEffect } from "react";
import SDK from '../core'


const model = [
    {type: 'input',name:'primary_contact_phone',title:'Whatsapp Number', values:{placeholder:'Whatsapp Number', type:'tel'}},
    {type: 'input',name:'test',title:'Whatsapp Number', values:{placeholder:'Whatsapp Number', type:'tel'}}

]
const Layout = () => {

    useEffect(() => {
        console.log(SDK)
    },[])

    const handleSubmit = () => {
        console.log('submiting')
    }
    return(
       <SDK.Studio submitHandler={handleSubmit} formConfig={model}/>

        )

}

render(
    <Layout/>, document.getElementById("root")
);