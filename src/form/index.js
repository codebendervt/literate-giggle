import service from 'local-service';
import microphone from 'assets/icons/microphone.svg';
import share from 'assets/icons/share.svg';
import {useEffect} from 'react';


const index  = ({param}) => {

    useEffect(async () => {


        let _id = service.native.uid()
        const _acc = service.native.getLocalStorage('acc')
        console.log(param,_id)

        console.log(_acc,'acc')
        console.log(_id, 'id')
        console.table(await service.backend.Config.get(_id),'getting data')
    },[])

    return (
        <div className={'w-screen h-screen flex flex-col lg:flex-row bg-black text-white p-2'}>



        </div>)
}





export default {index}
