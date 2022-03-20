import service from 'local-service';
import StudioForm from 'studio/form';
import form_models from './models';
import {useEffect,useState} from 'react';

const index  = ({param}) => {


    try{
        const [model, setModel] = useState()
        const submitHandler = form_models[param]({setModel})

        useEffect(async () => {

            try{
                if(model){

                    const data = {
                        org:'codebenderhq'
                    }

                    var requestOptions = {
                        method: 'GET',
                        redirect: 'follow',
                        headers : {
                            "access-control-allow-origin": "*",
                            "content-type": "application/json",
                        },
                        mode:'no-cors',
                    };
                    const e_data = service.native.encrypt('12345',JSON.stringify(data))

                    console.log(service.native.decrypt('12345',e_data))
                    //
                    // console.table(await service.backend.Config.get(_id),'getting data')
                }
            }catch(err){
                console.error('unable to start form',err.message)
            }

        },[model])

        return (
            <div className={'w-screen h-screen flex flex-col lg:flex-row bg-black text-white '}>


                <div className={'hidden lg:w-1/2 lg:flex bg-gray-700 p-2'}>

                </div>

                <div className={'w-full h-full lg:w-1/2 flex flex-col p-2'}>
                    {model ? <StudioForm submitHandler={submitHandler} formConfig={model}/> : <></>}
                </div>

            </div>)
    }catch{
        return (
            <div className={'w-screen h-screen flex flex-col lg:flex-row bg-black text-white '}>
                form does not exist
            </div>)
    }

}







export default {index}
