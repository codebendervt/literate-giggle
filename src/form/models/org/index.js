import {useState, useEffect} from 'react'
import service from 'local-service';

const model = [
    {type: 'info',name:'terms_conditions',title:'Let us create your business but first what we need from you',
        values: [
            {name:'Your Business Name',desc:'The name which you would like to be recognized on the platform'},
            {name:'Your Business Cell',desc:'The whatsapp number you would like to get contacted on'},
        ]
    },
    {type: 'input',name:'business_name',title:'Your Business Name',valid: () =>{} , values: {placeholder:'business name', type:'text'}},
    {type: 'input',name:'primary_contact_phone',title:'Whatsapp Number', values:{placeholder:'Whatsapp Number', type:'tel'}}
]

const index =  ({setModel}) => {

    const [response, setResponse] = useState()
    const [banks, setbanks] = useState()

    const validateBusinessName = async (val) => {
        let isValid = await service.backend.Config.isExist(val.toLowerCase())
        return !isValid
    }

    useEffect(async () => {

        try{
            console.log('initialzing form')
            model[1].valid = validateBusinessName
            setModel(model)

        }catch(err){
            console.log('unable to start form', err.message)
        }



    },[])

    const submitHandler = async (e) =>{

        try{
           const isRegistered =  await register_account(e)


            if(isRegistered)
                window.location = '/dash'

        }catch(err){
            console.log('unable to submit',err.message)
        }



    }

    const register_account = async (acc) => {

        try{

            let _acc =  localStorage.getItem('acc')
            const device_id = localStorage.getItem('id')
            let _data = await service.backend.Config.get(acc.business_name)
            _data.data = JSON.stringify( {
                device_id,
                primary_contact_phone : acc.primary_contact_phone
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
                return true
            }
        }catch(err){
            console.log('unable to register account',err.message)
            return false
        }


    }

    return submitHandler

}

export default index