import iconGenerator from '../../sdk/services/icons'
import {useEffect,useState} from "react";
import { nanoid } from 'nanoid'


const Bala  = () => {

    const [toggle, setToggle] = useState(false)

    return(
        <div className={'w-screen h-screen flex flex-col  text-white select-none  items-center justify-center md:justify-center md:items-center text-gray-900 p-4'}>

            {
                toggle ? <p className={'text-sm w-64 md:max-w-md md:w-full md:text-lg text-center font-book'}>
                    There is no greater agony than bearing an untold story inside you.  <br className={'md:hidden'}/>- Maya Angelou
                </p> :   <div className={'w-64 md:max-w-7xl flex md:text-center  text-center justify-center font-black'}>
                    <p className={"text-7xl md:text-8xl lg:text-9xl text-blue-500"}>
                        Write.
                        <br className={"md:hidden"}/>
                        <span className={'text-8xl lg:text-9xl'}>Share.
                        </span> <br className={"md:hidden"}/>
                        <span className={'text-8xl md:text-8xl lg:text-9xl text-orange-500'}>Publish.</span>
                    </p>
                </div>
            }


            <div className={'max-w-2xl w-full flex justify-center  font-book  py-4 text-lg md:text-xl cursor-pointer'}>
                <a href={'https://api.whatsapp.com/send?phone=27815206804&text=I%20would%20like%20early%20access%20to%20bala'} className={'p-2 rounded bg-purple-500 text-white mx-2 '}>Request Early Access</a>
                <a href={'/list'} className={'p-2 rounded bg-purple-500 text-white mx-2 '}>Join Waiting List</a>
            </div>

            <div className={'max-w-2xl w-full flex justify-center py-2 font-black'}>
                <div className={'text-purple-500 text-lg cursor-pointer'} onClick={() =>  setToggle(!toggle)}>{toggle ? 'Learn Less' : 'Learn More'} </div>
            </div>

        </div>
    )
}

export default Bala;