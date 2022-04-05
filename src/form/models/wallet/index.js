import {useState, useEffect} from 'react'
import service from 'local-service';
import save from "../../../../sdk/archive/services/backend/config/save";

const model = [
    {type: 'info',name:'terms_conditions',title:'Let us create your business but first what we need from you',
        values: [
            {name:'Your Business Name',desc:'The name which you would like to be recognized on the platform'},
            {name:'Your Bank Account',desc:'The bank account you would like your money to be paid out too'},
            {name:'Agreement',desc:'To continue creating your business you agree to codebenderhq terms & conditions'}
        ]
    },
    {type: 'input',name:'company_name',title:'Your Business Name',valid: () =>{} , values: {placeholder:'business name', type:'text'}},
    {type: 'search',
        name:'bank',
        title:'Select Bank',
        values:
            {
                placeholder:'Select Bank',
                type:'text',
                data:['nedbank', 'absa']
            }},
    {type: 'input',name:'account_number',title:'Business Account Number', values:{placeholder:'Account Number', type:'tel'}}
]

const business =  ({setModel}) => {

    const [response, setResponse] = useState()
    const [banks, setbanks] = useState()

    const validateBusinessName = async (val) => {
        let isValid = await service.backend.Config.isExist(val)
        return !isValid
    }

    useEffect(async () => {

        try{
            console.log('something starting')
            const banks_res = await fetch(`${process.env.DEV_API}fin/bank`)
            const banks = await banks_res.json()
            setbanks(banks.data)
            model[2].values.data = banks.data.map((bank) => bank.name)
            model[1].valid = validateBusinessName
            setModel(model)

        }catch(err){
            console.log('unable to start form', err.message)
        }



    },[])

    const submitHandler = async (e) =>{

        try{

            e.bank  = banks[e.bank];
            const create_account = {
                "business_name": e.company_name,
                "settlement_bank": e.bank.code,
                "account_number": e.acc_no,
                "percentage_charge": 5
            }
            const res = await fetch(`${process.env.DEV_API}fin/create_account`,{
                method: 'POST',
                body:JSON.stringify(create_account)
            })
            const _res = await res.json()

            if(_res.status) {
                const bank_id = _res.data.id
                create_account.id = bank_id
                await register_account(create_account)
            }


            if(_res.status)
                window.location = '/dash'

        }catch(err){
            console.log('unable to submit',err.message)
        }



    }

    const register_account = async (acc) => {
        let _acc =  localStorage.getItem('acc')
        const device_id = localStorage.getItem('id')
        let _data = await service.backend.Config.get(acc.business_name)
        _data.data = JSON.stringify( {
            device_id
        })

        let isSaved = await service.backend.Config.save(acc.business_name,_data)

        if(isSaved){
            if(_acc){
                _acc = JSON.parse(_acc)
                _acc.push(acc)
            }else{
                _acc = [acc]
            }
            console.log(_acc)
            localStorage.setItem('acc',JSON.stringify(_acc))
        }

    }

    return submitHandler

}

export default {business}