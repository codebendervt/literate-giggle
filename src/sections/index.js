import {useEffect, useState} from "react";
import {update, create} from "../../sdk/services/fauna";
import downIcon from 'url:../../assets/icons/down-circle.svg';

const App  = () => {
    const [pages, setPages] = useState([
        {
            title: "The Dev House In Your Pocket",
            action: "Allowing you to focus on the art business"},
        {
            title: "Technical Founder In Your Pocket",
            action: "So that you can focus on your industry of choice"}
    ])

    const [pageCount, addCount] = useState(0)
    useEffect(() => {

    },[])

    const managePage = () => {
        if(pageCount < (pages.length - 1 ))
            addCount(pageCount + 1)
        else
            addCount(0)
    }

    return(
        <div className={'w-screen h-screen bg-black text-white flex justify-center items-center p-2'}>

            <div className={"w-full h-screen flex flex-col"}>
                <div className={'w-full h-auto p-2 flex justify-center items-center'}>
                    <p>Choose your path</p>
                </div>
                <div className={'w-full h-auto flex flex-grow flex-col items-center justify-center text-center '}>

                   <p className={'text-3xl lg:text-5xl w-80 lg:w-full lg:max-w-lg font-black'}>
                       {pages[pageCount].title}
                   </p>
                    <div className={'text-sm lg:text-3xl w-52 lg:w-full lg:max-w-md text-center font-book'}>
                        {pages[pageCount].action}
                    </div>

                    <div className={'p-2 text-lg font-bold'}>
                        <a href={`/lead?id=${pageCount}`}>
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