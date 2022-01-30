import {useEffect, useState} from "react";
import {update, create} from "../../sdk/services/fauna";
import downIcon from 'url:../../assets/icons/down-circle.svg';
import StudioComponents from '../../sdk/studio/components'

const App  = () => {
    const [loading, isLoading] = useState(true);

    const [pages, setPages] = useState([
        {
            title: "The Dev House In Your Pocket",
            action: "Allowing you to focus on the art business",
            code: 00
        },
        {
            title: "Resident tech expert in your pocket ",
            action: "Giving you the power to exploit the the next decade",
            code: 01
        }
    ])

    const [pageCount, addCount] = useState(0)


    useEffect(() => {
        // console.log(StudioComponents.Loader)
        // setTimeout(() => { isLoading(false)}, 3000);

    },[])
    const managePage = () => {
        if(pageCount < (pages.length - 1 ))
            addCount(pageCount + 1)
        else
            addCount(0)
    }

    return(

        <div className={'flex w-scree h-screen justify-center items-center bg-black text-white'}>
            <div classname={'flex flex-col'}>
                <div className={'max-w-xl w-64 lg:w-full font-black text-2xl lg:text-6xl text-center py-2'}>
                    Reimagining the web as it should be!
                </div>
                <div className={"text-center"}>
                    <a href={'https://www.notion.so/codebenderhq/9a839bce03a34954b7b58af6d23dd939?v=70197b85ee784ab8a00257b86762bd28'} className={'text-xl font-black p-2 text-blue-300'}>Show Me How</a>
                </div>

            </div>

        </div>

    )
}

export  default App;