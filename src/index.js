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
                        <div className={'text-2xl  animate__animated animate__fadeIn animate__delay-1s'}> sauveurhq</div>
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
