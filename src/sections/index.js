import {useEffect, useState} from "react";
import {update, create} from "../../sdk/services/fauna";
import downIcon from 'url:../../assets/icons/down.svg';
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

        <div className={'flex  flex-col w-screen h-screen bg-black text-gray-200 relative p-2 font-book'}>

            <div className={'h-auto w-full flex flex-grow flex-col  justify-end lg:justify-center p-4 py-8 '}>

                <div className={'flex flex-col lg:flex-col-reverse w-full h-auto'}>
                    <div className={'max-w-2xl w-84 lg:w-full font-black text-4xl lg:text-6xl  py-2 '}>
                        No Code.<br className={'lg:hidden'}/> No Design.<br/> Just Business.
                    </div>

                    <div className={'w-72 lg:w-full text-sm lg:text-xl py-1 lg:px-0'}>
                        You have a dream app, We craft it and<br className={'lg:hidden'}/> You execute your vision!
                    </div>

                </div>



                <div className={'w-64 lg:w-full text-xs lg:text-lg py-2 flex items-center'}>
                    <a href={'https://api.whatsapp.com/send?phone=27815206804&text=I%20would%20like%20early%20access'} className={'p-2 bg-blue-400 rounded '}>
                        Request Early Access
                    </a>

                    <a href={'https://codebenderhq.notion.site/Learn-More-8bd3ee22270b41c99c30f162751c28d6'} className={'mx-2 text-blue-400'}>
                        Learn More
                    </a>
                </div>




                {/*<div className={"text-center"}>*/}
                {/*    <a href={'https://www.notion.so/codebenderhq/9a839bce03a34954b7b58af6d23dd939?v=70197b85ee784ab8a00257b86762bd28'} className={'text-xl font-black p-2 text-blue-300'}>Show Me How</a>*/}
                {/*</div>*/}

            </div>


            {/*<div className={'w-full h-auto flex justify-center items-center py-4'}>*/}
            {/*    <a href={'/dot'}>*/}
            {/*        <img className={'animate-bounce transition duration-1000'} src={downIcon}/>*/}
            {/*    </a>*/}

            {/*</div>*/}

        </div>

    )
}

export  default App;