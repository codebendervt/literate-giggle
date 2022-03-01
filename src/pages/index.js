import buy from './buy'
import dash from './dash'


const index  = () => {

    return(

        <div className={'flex  flex-col w-screen h-screen bg-black text-gray-200 relative p-2 font-book'}>

            <div className={'h-auto w-full flex flex-grow flex-col  justify-end lg:justify-center p-4 py-12 '}>

                <div className={'flex flex-col lg:flex-col-reverse w-full h-auto'}>
                    <div className={'max-w-2xl w-84 lg:w-full font-black text-4xl lg:text-6xl  py-2 '}>
                        No Code.<br className={'lg:hidden'}/> No Design.<br/> Just Business.
                    </div>

                    <div className={'w-72 lg:w-full text-sm lg:text-xl py-1 lg:px-0'}>
                        You have a dream app, We craft it and<br className={'lg:hidden'}/> You execute your vision!
                    </div>

                </div>



                <div className={'w-64 lg:w-full text-xs lg:text-lg py-2 flex items-center'}>
                    <a href={'https://api.whatsapp.com/send?phone=27815206804&text=I%20would%20like%20early%20access'} className={'p-2 bg-blue-400 rounded text-gray-900 '}>
                        Request Early Access
                    </a>

                    <a href={'https://www.notion.so/codebenderhq/9a839bce03a34954b7b58af6d23dd939?v=70197b85ee784ab8a00257b86762bd28'} className={'mx-6 lg:mx-8 text-blue-400'}>
                        Learn More
                    </a>
                </div>

            </div>


        </div>

    )
}


export default {index, dash, buy}
