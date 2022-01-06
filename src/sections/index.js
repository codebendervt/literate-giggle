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
        setTimeout(() => { isLoading(false)}, 3000);

    },[])
    const managePage = () => {
        if(pageCount < (pages.length - 1 ))
            addCount(pageCount + 1)
        else
            addCount(0)
    }

    return(

            loading ? <StudioComponents.Loader msg={'the next decade is yours'}/> :
                <div className={'w-screen h-screen bg-black text-white flex justify-center items-center p-2'}>

                    <div className={"w-full h-screen flex flex-col"}>
                        <div className={'w-full h-auto p-2 flex justify-center items-center font-bold '}>
                            <p className={'border-b-2 py-2'}>Choose your path</p>
                        </div>
                        <div
                            className={'w-full h-auto flex flex-grow flex-col items-center justify-center text-center '}>

                            <p className={'text-3xl lg:text-5xl w-80 lg:w-full lg:max-w-lg font-black'}>
                                {pages[pageCount].title}
                            </p>
                            <div className={'text-sm lg:text-xl w-52 lg:w-full lg:max-w-xs text-center font-book'}>
                                {pages[pageCount].action}
                            </div>

                            <div className={'p-2 text-lg font-bold p-2 border-2 m-4 hover:bg-white hover:text-black'}>
                                <a href={`/lead?id=${pages[pageCount].code}`}>
                                    Select Path
                                </a>

                            </div>
                        </div>

                        <div className={"p-2 flex justify-center"}>
                            <div className={'cursor-pointer'} onClick={() => managePage()}>
                                <img src={downIcon} className={'w-10 h-10'}/>
                            </div>

                        </div>

                    </div>
                </div>

    )
}

export  default App;