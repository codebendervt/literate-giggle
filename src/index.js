import bye from './bye';
import bala from './bala';
import dash from './dash';
import form from './form';
import service from 'local-service';
import {useEffect,useState} from 'react';


const index  = ({param}) => {

    const [org, setOrg] = useState();

    useEffect( async () => {

        try{
            if(param){
                console.log(param)
                const _org =  await service.backend.Config.get(param)

                const _org_data = JSON.parse(_org.data)
                //
                if(_org.data)
                    window.location = `https://api.whatsapp.com/send?phone=${_org_data.primary_contact_phone}&text=I%20would%20like%20buy%20your%20product`
            }

        }catch(err){
            console.log('unable to find customer',err.message)
        }

    },[])


    // useEffect(async () => {
    //     console.log(await service.backend.Config.get('hello'),'getting data')
    // },[])

    return (
        <div className={'w-screen h-screen flex items-center justify-center lg:flex-row bg-black text-white'}>

            <div className={'text-2xl font-bold animate flex flex-col items-center '}>
                {param ? param : 'sauveurhq'}
                <span className={'animate-pulse'}>-</span>
            </div>
        </div>)
}

const error = () => {
    return(
        <>404</>
    )
}



export default {index, dash, bye, bala, form,error}
