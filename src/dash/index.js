import service from 'local-service';
import microphone from 'assets/icons/microphone.svg';
import share from 'assets/icons/share.svg';
import {useEffect,useState} from 'react';


const index  = () => {

    const [acc, setAcc] = useState()
    const [msg, setMsg] = useState()
    const [active_account, setActive] = useState()
    const [route, setRoute] = useState()
    const [section, toggleSection] = useState('p')
    const [drawer, toggleDrawer] = useState(false)
    const [orders, setOrders]  = useState()
    const [product, setProduct]  = useState()

    const registerDevice = async () => {
        let _id = service.native.uid()
        let isValid = await service.backend.Config.isExist(_id)

        if(isValid)  {
            localStorage.setItem('id',_id)
        }else{
            registerDevice()
        }
          return true
    }

    const getOrders = async () => {

        const uri = `${active_account.business_name}/orders`;
        console.log(uri)
        let isValid = await service.backend.Config.isExist(uri)
        if(isValid)
            setOrders(await service.backend.Config.get(uri))


    }

    useEffect(async () => {

        //this will be your principal id in the near future
        const id = service.native.getLocalStorage('id')
        if(!id){
            await registerDevice()
        }

        const _acc = service.native.getLocalStorage('acc')
        if(!_acc){
            setMsg('you currently have no virtual business linked to this device')
            setRoute('/form/org')
        }else{
            let stored_acc = JSON.parse(_acc)
            setAcc(stored_acc)
            console.log(stored_acc)
            setActive(stored_acc[0])
        }
    },[])

    useEffect(async () => {
        if(active_account) {
            setMsg('you are registered! Above is your custom link to share to your customers')
            // await getOrders()
        }
    },[active_account])

    //
    // useEffect(async () => {
    //     const products = service.native.getLocalStorage('products')
    //
    //     if(!orders && !products) {
    //         setMsg('You currently do not have any orders and no goods that you offer to the world')
    //         setRoute('/form/product')
    //
    //     }else if(!orders){
    //         setProduct(products)
    //         setMsg('You currently do not have any orders ')
    //     }
    // },[orders])

    const copyText = () => {

        navigator.clipboard.writeText(`https://sauveur.xyz/${active_account.business_name}`)

       setMsg('your unique business handle has been copied and is ready to share with your customers')
    }
    return (
        <div className={'w-screen h-screen flex flex-col lg:flex-row bg-black text-white '}>


             {/*dashbpard drawer*/}
            <div className={`${drawer ? '':'hidden'} w-80 lg:w-1/4 h-screen flex flex-col bg-gray-200 rounded-r-lg shadow absolute lg:relative p-2 z-20 text-black`}>

                {/*<div className={'w-full h-12  flex justify-center'}>*/}
                {/*    <div className={'w-full h-full rounded bg-gray-300 p-2 flex'}>*/}
                {/*        <div className={'w-auto flex-grow h-full bg-gray-100 rounded flex justify-center items-center text-black text-xs'}>*/}
                {/*            https://sauveur.xyz/codebenderhq*/}
                {/*        </div>*/}
                {/*        <div className={'w-12 h-full flex items-center justify-center '}>*/}
                {/*            <img className={'p-2'} src={share}/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className={'w-full h-auto flex-grow flex flex-col'}>


                    <div className={'p-2 text-lg font-bold w-full '}>
                        {active_account ? active_account.business_name : ''}
                    </div>

                </div>

                <div className={'w-full flex flex-col items-center p-2 justify-end'}>

                    {/*<div className={'p-2 w-full bg-gray-300 h-12 rounded flex lg:cursor-pointer'}>*/}
                    {/*    <div onClick={() => toggleSection('p')} className={`w-1/2 ${section === 'p' ? 'bg-gray-700 text-white' : ''}  rounded p-2 items-center justify-center flex`}>*/}
                    {/*        Product*/}
                    {/*    </div>*/}
                    {/*    <div  onClick={() => toggleSection('s')} className={`w-1/2  ${section === 's' ? 'bg-gray-700 text-white' : ''}  rounded p-2 items-center justify-center flex`}>*/}
                    {/*        Service*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    <p className={'text-black text-sm my-2'}>A new edition to the creator economy</p>
                </div>
            </div>

            <div className={'w-full h-full lg:w-3/4 flex flex-col p-2'}>

                {/*url search bar*/}
                {active_account ?
                    <div className={'w-full h-12  flex justify-center'}>
                        <div className={'w-full h-full rounded bg-gray-300 p-2 flex'}>
                            <div className={'w-auto flex-grow h-full bg-gray-100 rounded flex justify-center items-center text-black text-sm'}>
                                {`https://sauveur.xyz/${active_account.business_name}`}
                            </div>
                            <div className={'w-12 h-full flex items-center justify-center '} onClick={copyText}>
                                <img className={'p-2'} src={share}/>
                            </div>
                        </div>
                    </div>
                    :<></>
                }


                <div className={'w-full h-auto flex flex-grow items-center justify-center'}>

                    <div className={'flex-col flex justify-center items-center'}>
                        <img className={'w-12 h-12 p-2 '} src={microphone}/>
                        <p className={'text-sm text-center w-64'}>
                            {msg}
                        </p>


                        {/*{!product && route ?*/}
                        {/*    <a href={route} className={'p-2 text-blue-500 my-2'}>*/}
                        {/*    Create Product*/}
                        {/*    </a> :*/}
                        {/*    <></>*/}
                        {/*}*/}

                    </div>


                </div>


                {/*<div className={`h-12 w-full flex ${acc ? '' : 'mb-4'} items-center justify-center`}>*/}

                {/*    {*/}
                {/*        acc ?*/}
                {/*            <div onClick={() => toggleDrawer(!drawer)} className={'w-full flex justify-end items-center'}>*/}
                {/*                <div className={'flex-col'}>*/}
                {/*                    <div className={'flex'}>*/}
                {/*                        <div className={'w-2 h-2 rounded-full bg-white m-1'}></div>*/}
                {/*                        <div className={'w-2 h-2 rounded-full bg-white m-1'}></div>*/}
                {/*                    </div>*/}

                {/*                    <div className={'flex'}>*/}
                {/*                        <div className={'w-2 h-2 rounded-full bg-white m-1'}></div>*/}
                {/*                        <div className={'w-2 h-2 rounded-full bg-white m-1'}></div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}



                {/*            </div>*/}
                {/*            :*/}
                            <div className={'w-full lg:w-2/3 flex justify-center'}>
                                {
                                    route ?
                                        <a href={route} className={'w-64 text-center p-2 bg-blue-500 rounded text-xl items-center text-gray-800'}>
                                Create
                            </a>
                                        :
                                        <></>
                                }
                            </div>
                {/*    }*/}


                {/*</div>*/}

            </div>

        </div>
    )
}





export default {index}
