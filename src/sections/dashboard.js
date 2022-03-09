import {useEffect,useState,useRef} from 'react';
import pages from '../pages';
import App from '../../sdk/toolbox'

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

// const Container = ({Comp,param}) => {
//
//     return (
//         <Comp param={param}></Comp>
//     )
//
// }
//
// //main route engine
// const DashboardApp = () => {
//
//     const [paths, setPaths] = useState()
//     const [page, setPage] = useState( )
//     const [param, setParam] = useState('')
//     const [pageName, setPageName]= useState()
//
//
//     useEffect(() => {
//         const path = document.location.pathname.split('/');
//         path.shift()
//         setPaths(path)
//
//     },[])
//
//     const loadPage = (path, prePath) => {
//         return  prePath[path]
//     }
//
//     const initPage = (_page) => {
//         setPage(_page)
//     }
//
//     useEffect(() => {
//         let _page = () => <>loading</>;
//         // console.log(paths)
//         if(paths)
//         {
//
//             try{
//                 paths.map((path,index) => {
//
//                     if(path === '' && index === 0 ) {
//                         _page = pages
//                         setPageName('index')
//                     }
//                     else if(paths.length === 1){
//
//                         if(pages[path]){
//                             _page = pages[path]
//                             setPageName('index')
//                         }else{
//                             _page = pages
//                             setPageName('index')
//                             throw 'send through param or fail';
//                         }
//                     }
//                     else if(index === 0){
//                         _page = pages[path]
//                     }
//                     else{
//                         const isPage = loadPage(path,_page)
//
//                         if(isPage){
//                           setPageName(path)
//                         }  else
//
//                         {
//                             if(_page['index'] && index !== 2){
//                                 setPageName('index')
//                             }
//                             throw 'send through param or fail';
//                         }
//                     }
//
//
//                 })
//
//
//
//             }
//             catch{
//
//                 try{
//                     _page['index']()
//                 }catch(err) {
//
//                     if(err instanceof TypeError ){
//                         setParam(paths.pop())
//                         console.log('send through params')
//                     }else{
//                         console.log('return 404')
//                         // // _page = <>404</>
//                     }
//
//                 }
//
//             }
//             setPage(_page)
//
//         }
//
//
//     },[paths])
//
//
//
//         if(page){
//             return(
//
//                 <Container param={param} Comp={page[pageName]}/>
//             )
//         }else{
//             return(
//                 <></>
//                 )
//
//         }
//
// }
//

const TheApp = () => {

    return(
        <App pages={pages}></App>
    )
}

export default TheApp;