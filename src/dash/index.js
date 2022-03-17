import service from 'local-service';
import microphone from 'assets/icons/microphone.svg';
import {useEffect} from 'react';


const index  = () => {

    useEffect(async () => {

        console.log(microphone)
        let _id = service.native.uid()
        const _acc = service.native.getLocalStorage('acc')


        console.log(_acc,'acc')
        console.log(_id, 'id')
        console.table(await service.backend.Config.get(_id),'getting data')
    },[])

    return (
        <div className={'w-screen h-screen flex flex-col lg:flex-row bg-black text-white p-2'}>

            <div className={'w-full h-auto flex flex-grow items-center justify-center'}>

                <div className={'flex-col flex justify-center items-center'}>
                    <img className={'w-12 h-12 p-2 '} src={microphone}/>
                    <p className={'text-sm text-center w-64'}>
                        You currently do not have any goods or services that you
                        offer to the world
                    </p>
                </div>


            </div>


            <div className={'h-12 w-full flex mb-4 items-center justify-center'  }>

                <div className={'w-64 text-center p-2 bg-blue-500 rounded text-xl items-center text-gray-800'}>
                    Create
                </div>
            </div>

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
