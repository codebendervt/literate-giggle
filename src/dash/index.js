import service from 'local-service';
import {useEffect} from 'react';


const index  = () => {

    useEffect(async () => {
        let _id = service.native.uid()
        const _acc = service.native.getLocalStorage('acc')


        console.log(_acc,'acc')
        console.log(_id, 'id')
        console.table(await service.backend.Config.get(_id),'getting data')
    },[])

    return (
        <div className={'w-screen h-screen flex flex-col lg:flex-row bg-black text-white'}>
            {/* dashbpard drawer*/}
            {/*<div className={'w-80 h-screen flex flex-col bg-gray-200 rounded-r-lg shadow absolute lg:relative p-2'}>*/}
            {/*    <div className={'w-full h-auto flex-grow'}></div>*/}
            {/*    <div className={'w-full flex items-end p-2 justify-center'}>*/}
            {/*        <p className={'text-black text-sm'}>A new edition to the creator economy</p>*/}
            {/*    </div>*/}
            {/*</div>*/}


        </div>)
}





export default {index}
