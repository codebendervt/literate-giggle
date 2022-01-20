import iconGenerator from '../../sdk/services/icons'
import {useEffect} from "react";
import { nanoid } from 'nanoid'


const Pay  = () => {

    useEffect(() => {
        console.log( )

    },[])

    return(
        <div className={'w-screen h-screen flex flex-col-reverse lg:flex-row  text-white'}>
            <div className={'w-full lg:w-1/2 bg-black'}>
            {/*    for decoration puporses right now */}
            </div>

            <div className={'w-full h-full lg:w-1/2 bg-white flex justify-start lg:justify-center p-4'}>
                <div className={"w-24 h-16 lg:h-24 bg-black rounded mx-2 flex items-center justify-center"}>
                    <div className={'rounded-full bg-black p-2 w-12 h-12 flex items-center justify-center'}>
                        {iconGenerator(nanoid())}
                    </div>

                </div>
                <div className={"max-w-lg w-full h-16 lg:h-24 bg-gray-200 rounded mx-2"}></div>
            </div>
        </div>
    )
}

export default Pay;