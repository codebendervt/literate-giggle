import iconGenerator from '../../../sdk/archive/services/icons'
import {useEffect,useState} from "react";
import { nanoid } from 'nanoid'


const Pay  = () => {

    const [toggle, setToggle] = useState(true)
    const [transition, setTransistion] = useState()
    useEffect(() => {
        console.log( )

    },[])
    //animate__fadeOutRight
    //animate__fadeOutLeft
    //animate__fadeOut

    const switchCard = () => {

        setTimeout(() => setToggle(!toggle), 900)
        setTimeout(() =>  setTransistion('animate__fadeIn'), 1000)

    }

    const toggleNow = () => {
        setTransistion('animate__fadeOut')
        switchCard()
    }
    return(
        <div className={'w-screen h-screen flex flex-col-reverse lg:flex-row  text-white select-none'}>
            <div className={'w-full lg:w-1/2 bg-black'}>
            {/*    for decoration puporses right now */}
            </div>

            <div className={`w-full h-full lg:w-1/2 bg-white   pt-4 flex flex-col overflow-y-hidden  justify-center`}>

                <div className={`flex mb-4 px-4 animate__animated  ${toggle ? `flex-row ${transition} `: `flex-row-reverse ${transition} `} justify-start lg:justify-center`}>
                    <div onClick={() => toggleNow()} className={`w-24 h-16 lg:h-24 bg-black rounded mx-2 flex items-center justify-center rounded-full`}>
                        <div className={'rounded-full bg-black p-2 w-12 h-12 flex items-center justify-center'}>
                            {iconGenerator(nanoid())}
                        </div>

                    </div>
                    <div className={"max-w-xs w-full h-16 lg:h-24 bg-black rounded mx-2 p-2 items-center flex"}>
                        <div className={`font-bold w-full ${toggle ? 'text-right': 'text-left'}`}>
                            <h1 className={'text-xl'}>{toggle? 'Gmabata':'Sauveur'  } </h1>
                            <p className={'text-xs'}>{toggle? 'Design Entrepteneur':'Seekig Freedom One App At A Time' }</p>
                        </div>

                    </div>
                </div>

                <div className={'w-full flex justify-center h-auto px-6 flex-grow'}>
                    <div className={'w-full max-w-md flex lg:px-2 flex-col'}>

                        <div className={'w-full h-16 font-bold bg-black rounded flex items-center px-2 my-2'}>
                            <div className={'w-3/4 text-lg'}>Design</div>
                            <p className={'w-1/4 text-lg text-right'}>5 000</p>
                        </div>

                        <div className={'w-full h-16 font-bold bg-black rounded flex items-center px-2 my-2'}>
                            <div className={'w-3/4 text-lg'}>Develop</div>
                            <p className={'w-1/4 text-lg text-right'}>5 000</p>
                        </div>


                        {/*view more still in development*/}
                        <div className={'text-black w-full text-center'}>
                            <p>
                                view more
                            </p>

                            <div className={'w-full flex-col text-right hidden'}>
                                <div className={'flex w-full '}>
                                    <p className={'w-1/2'}>vat inclusive</p>
                                    <p className={'w-1/2'}>15%</p>
                                </div>

                                <div className={'flex w-full'}>
                                    <p className={'w-1/2'}>total</p>
                                    <p className={'w-1/2'}>10 000</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>



                <div className={'w-full h-32 relative'}>
                    <div className={'w-full h-full items-center justify-center flex bg-black lg:bg-transparent rounded-t-xl shadow absolute'}>
                        <a href={'https://paystack.com/pay/mjeji67eer'} className={'items-center text-gray-700 rounded-lg bg-green-200 p-2'}>
                            Pay R10 000
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pay;