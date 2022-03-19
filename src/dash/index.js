import service from 'local-service';
import microphone from 'assets/icons/microphone.svg';
import share from 'assets/icons/share.svg';
import {useEffect,useState} from 'react';


const index  = () => {

    const [acc, setAcc] = useState()
    const [msg, setMsg] = useState()
    const [route, setRoute] = useState()

    useEffect(async () => {

        //this will be your principal id in the near future
        let _id = service.native.uid()
        const _acc = service.native.getLocalStorage('acc')

        if(!_acc){
            setMsg('you currently have no virtual business linked to this device')
            setRoute('/form/business')
        }

        // console.log(_acc,'acc')
        // console.log(_id, 'id')
        // console.table(await service.backend.Config.get(_id),'getting data')
    },[])

    // You currently do not have any goods or services that you
    // offer to the world
    return (
        <div className={'w-screen h-screen flex flex-col lg:flex-row bg-black text-white '}>


            <div className={'hidden lg:w-1/2 lg:flex bg-gray-700 p-2'}>

            </div>

            <div className={'w-full h-full lg:w-1/2 flex flex-col p-2'}>
                {acc ?

                    <div className={'w-full h-12  px-4 mt-4 flex justify-center'}>
                        <div className={'w-full h-full rounded bg-gray-400 p-2 flex'}>
                            <div className={'w-auto flex-grow h-full bg-gray-300 rounded flex justify-center items-center text-black text-lg'}>
                                https://sauveur.xyz/gmabata
                            </div>
                            <div className={'w-12 h-full flex items-center justify-center '}>
                                <img className={'p-2'} src={share}/>
                            </div>
                        </div>
                    </div>
                    :
                    <></>
                }


                <div className={'w-full h-auto flex flex-grow items-center justify-center'}>

                    <div className={'flex-col flex justify-center items-center'}>
                        <img className={'w-12 h-12 p-2 '} src={microphone}/>
                        <p className={'text-sm text-center w-64'}>
                            {msg}
                        </p>
                    </div>


                </div>


                <div className={'h-12 w-full flex mb-4 items-center justify-center'  }>
                    {route ?
                        <a href={route} className={'w-64 text-center p-2 bg-blue-500 rounded text-xl items-center text-gray-800'}>
                            Create
                        </a>
                        :
                        <></>
                    }


                </div>
            </div>



            {/* dashbpard drawer*/}
            {/*<div className={'w-80 h-screen flex flex-col bg-gray-200 rounded-r-lg shadow absolute lg:relative p-2'}>*/}
            {/*    <div className={'w-full h-auto flex-grow'}></div>*/}
            {/*    <div className={'w-full flex items-end p-2 justify-center'}>*/}
            {/*        <p className={'text-black text-sm'}>A new edition to the creator economy</p>*/}
            {/*    </div>*/}
            {/*</div>*/}


        </div>
    )
}





export default {index}
