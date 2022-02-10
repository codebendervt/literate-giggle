import iconGenerator from '../../sdk/services/icons'
import {useEffect,useState} from "react";
import { nanoid } from 'nanoid'


const Order  = () => {

    const [toggle, setToggle] = useState(false)

    return(
        <div className={'w-screen h-screen flex flex-col  text-white select-none  bg-black items-center justify-center md:justify-center md:items-center text-white p-4'}>

            <p className={" text-2xl w-64 text-center font-book my-2"}>
                Thank you for your order {new URLSearchParams(window.location.search).get('name')}
            </p>
            <a href={'https://api.whatsapp.com/send?phone=27815206804&text=I%20have%20queries%20about%20your%20weed'} className={" p-2 bg-blue-500 rounded text-sm  text-center font-book"}>
                contact buyer for any queries
            </a>


        </div>
    )
}

export default Order;