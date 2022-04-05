import { render } from "react-dom";
import { useEffect } from "react";
import Studio from '../core'


const model = [
    {type: 'input',name:'primary_contact_phone',title:'Whatsapp Number', values:{placeholder:'Whatsapp Number', type:'tel'}}

]
const Layout = () => {

    useEffect(() => {
        // console.log(Form)
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