import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {update, create} from "../../sdk/services/fauna";
import downIcon from 'url:../../assets/icons/down-circle.svg';
import StudioComponents from '../../sdk/studio/components'

const Dot  = () => {
    let params = useParams();
    const [loading, isLoading] = useState(true);
    const [toggle, setToggle] = useState(false)


    useEffect(() => {
        // console.log(StudioComponents.Loader)
        // setTimeout(() => { isLoading(false)}, 3000);

    },[])


    return(

        <div className={'w-screen h-screen flex flex-col text-white select-none  items-center justify-center md:justify-center md:items-center text-gray-900 p-4'}>

            {
                toggle ?
                    <p className={'text-sm w-64 md:max-w-md md:w-full md:text-lg text-center font-book'}>
                        keeping it simple, no code, no design, just business
                </p> :
                    <div className={'w-64 md:max-w-7xl flex md:text-center  text-center justify-center font-black text-5xl md:text-7xl'}>

                        <h1>{params.brand}</h1>
                </div>
            }


            <div className={'max-w-2xl w-full flex flex-col justify-center font-book  my-4 text-xs md:text-xl items-center '}>
                <a href={'https://api.whatsapp.com/send?phone=27815206804&text=I%20would%20like%20early%20access%20to%20bala'} className={'p-2 rounded bg-slate-500 text-white mx-2 lg:cursor-pointer '}>Request Early Access</a>

                <p className={'text-slate-500 md:text-lg lg:cursor-pointer my-4 m-2 outline-none'} onClick={() =>  setToggle(!toggle)}>{toggle ? 'Learn Less' : 'Learn More'} </p>
            </div>

            {/*<div className={'max-w-2xl w-full flex justify-center py-2 font-black'}>*/}
            {/*    <div className={'text-purple-500 text-sm cursor-pointer'} onClick={() =>  setToggle(!toggle)}>{toggle ? 'Learn Less' : 'Learn More'} </div>*/}
            {/*</div>*/}

        </div>


    )
}

export  default Dot;