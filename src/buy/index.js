import iconGenerator from '../../sdk/services/icons'
import {useEffect,useState} from "react";
import { nanoid } from 'nanoid'


const Buy  = () => {

    return(
        <div className={'w-screen h-screen flex flex-col lg:flex-row  text-white select-none p-4 lg:p-0 bg-transparent  md:justify-center '}>

            <div className={'w-full h-2/3 md:h-1/2 lg:h-full lg:w-1/2 flex justify-center'}>
                <div className={'w-full h-full flex md:max-w-lg lg:max-w-full'}>
                    <div className={'w-full h-full  bg-black rounded lg:rounded-none '}></div>
                </div>
            {/*product image*/}
            </div>

            <div className={'w-full h-1/3 md:h-auto lg:w-1/2 lg:h-full flex flex-col  items-center text-gray-700  z-20'}>
                <div className={'w-full h-full  max-w-md  md:max-w-lg'}>
                    <div className={'h-full w-full flex flex-col md:justify-center'}>

                        {/*<div className={'rounded w-full h-96 bg-gray-200'}></div>*/}
                        <div className={'flex-grow md:flex-none h-auto w-full flex-col py-2'}>
                            <h1 className={'text-2xl lg:text-4xl font-bold'}>Product Title</h1>
                            <h2 className={'text-xl lg:text-2xl font-bold'}>ZAR 450</h2>

                            <p className={'text-lg'}>
                                This is a description of the product that you are currently having a look at
                            </p>
                        </div>

                        <div className={'w-full h-auto flex'}>

                            <div className={'w-full p-2 bg-black rounded h-12 text-white text-center text-lg'}>
                                Buy Now
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Buy;