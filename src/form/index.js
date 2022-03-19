import service from 'local-service';
import StudioForm from 'studio/form';
import share from 'assets/icons/share.svg';
import {useEffect,useState} from 'react';


const model = [
    {type: 'info',name:'terms_conditions',title:'Let us create your business but first',
        values: [
            {name:'Your Business Name',desc:'The name which you would like to be recognized on the platform'},
            {name:'Your Bank Account',desc:'The bank account you would like your money to be paid out too'},
            {name:'Agreement',desc:'To continue creating your business you agree to codebenderhq terms & conditions'}
        ]
    },
    {type: 'input',name:'company_name',title:'Your Business Name', values: {placeholder:'business name', type:'text'}},
    {type: 'search',
        name:'bank',
        title:'Select Bank',
        values:
            {
                placeholder:'Select Bank',
                type:'text',
                data:['nedbank', 'absa']
            }},
    {type: 'input',name:'acc_no',title:'Business Account Number', values:{placeholder:'Account Number', type:'tel'}}
]


const index  = ({param}) => {

    useEffect(async () => {


        let _id = service.native.uid()
        const _acc = service.native.getLocalStorage('acc')

        const data = {
            org:'codebenderhq'
        }

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers : {
                "content-type": "application/json",
            },
            mode:'no-cors',
        };
        const e_data = service.native.encrypt('12345',JSON.stringify(data))

        console.log(process.env.DEV_URL)
        const banks = await fetch(`https://clear-donkey-10-bmsfaxst7qq0.deno.dev/`,requestOptions)

        console.log( banks)
        console.log(service.native.decrypt('12345',e_data))
        console.log(param,_id)
        console.log(_acc,'acc')
        console.log(_id, 'id')
        console.table(await service.backend.Config.get(_id),'getting data')
    },[])

    const submitHandler = (e) =>{

        console.log(e)
    }

    return (
        <div className={'w-screen h-screen flex flex-col lg:flex-row bg-black text-white '}>


            <div className={'hidden lg:w-1/2 lg:flex bg-gray-700 p-2'}>

            </div>

            <div className={'w-full h-full lg:w-1/2 flex flex-col p-2'}>
                <StudioForm submitHandler={submitHandler} formConfig={model}/>
            </div>

        </div>)
}





export default {index}
