import { render } from "react-dom";
import { useEffect } from "react";
import Studio from '../core'


const model = [
    {type: 'input',name:'primary_contact_phone',title:'Whatsapp Number', values:{placeholder:'Whatsapp Number', type:'tel'}},
    {type: 'input',name:'name',title:'Your Name', values:{placeholder:'Your Name', type:'tel'}}

]
const Layout = () => {

    const db_service = Studio.core_services.fauna;

    useEffect(() => {
         console.log(db_service)
    },[])

    const handleSubmit = () => {

        console.log('submiting')
    }
    return(
        <div className={'w-full h-screen bg-black '}>
          <Studio.Form submitHandler={handleSubmit} formConfig={model}/>
        </div>

        )

}

render(
    <Layout/>, document.getElementById("root")
);