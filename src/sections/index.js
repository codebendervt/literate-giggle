import {useEffect} from "react";
import {update, create} from "../../sdk/services/fauna";

const App  = () => {
    useEffect(() => {
    },[])

    return(
        <div className={'w-screen h-screen bg-black text-white flex justify-center items-center p-2'}>

            <div className={"w-full h-screen flex flex-col"}>
                <div className={'w-full h-auto flex flex-grow items-center justify-center'}>
                   <p>
                       The Dev House In Your Pocket
                   </p>
                </div>

            </div>
        </div>
    )
}

export  default App;