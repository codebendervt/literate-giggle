import {useEffect,useState} from 'react';
import pages from '../pages';


const Dashboard  = () => {


    return(
        <div className={'w-screen h-screen flex flex-col lg:flex-row bg-black text-white'}>
            <div className={'w-80 h-screen flex flex-col bg-gray-200 rounded-r-lg shadow absolute lg:relative p-2'}>
                <div className={'w-full h-auto flex-grow'}></div>
                <div className={'w-full flex items-end p-2 justify-center'}>
                    <p className={'text-black text-sm'}>A new edition to the creator economy</p>
                </div>

            </div>
        </div>
    )
}

const Container = ({Comp}) => {

    useEffect(() => {
        // console.log(Comp(), 'comp')
    })
    if(Comp()){
        return (
           <Comp></Comp>
        )
    }else{
        return (<>loading</>)
    }

}

//main route engine
const DashboardApp = () => {

    const [paths, setPaths] = useState()
    const [page, setPage] = useState()

    useEffect(() => {
        const path = document.location.pathname.split('/');
        path.shift()
        setPaths(path)

    },[])

    const loadPage = (path, prePath) => {
        return prePath[path]
    }

    useEffect(() => {

        if(paths)
        {
            console.log(paths)
            let _page;
            try{
                paths.map((path,index) => {

                    if(path === '') {
                        _page = pages['index']
                    }else if(paths.length === 1){
                        _page = pages[path]['index']
                    }else if(index === 0){
                        _page = pages[path]
                    }
                    else{
                        _page = loadPage(path,_page)
                    }

                })
            }catch{
                _page = <>404</>
            }

            setPage(_page)
            console.log('page loaded')

        }
    },[paths])


    return(

        <Container Comp={() => page }/>
    )
}



export default DashboardApp;