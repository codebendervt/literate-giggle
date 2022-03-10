import {useEffect, useState} from "react";
import pages from './box'

const Container = ({Comp,param}) => {

    return (
        <Comp param={param}></Comp>
    )

}

//main route engine
const App = ( ) => {

    const [paths, setPaths] = useState()
    const [page, setPage] = useState( )
    const [param, setParam] = useState('')
    const [pageName, setPageName]= useState()


    useEffect(() => {
        const path = document.location.pathname.split('/');
        path.shift()
        setPaths(path)

    },[])

    const loadPage = (path, prePath) => {
        return  prePath[path]
    }

    const initPage = (_page) => {
        setPage(_page)
    }

    useEffect(() => {
        let _page = () => <>loading</>;
        // console.log(paths)
        if(paths)
        {

            try{
                paths.map((path,index) => {

                    if(path === '' && index === 0 ) {
                        _page = pages
                        setPageName('index')
                    }
                    else if(paths.length === 1){

                        if(pages[path]){
                            _page = pages[path]
                            setPageName('index')
                        }else{
                            _page = pages
                            setPageName('index')
                            throw 'send through param or fail';
                        }
                    }
                    else if(index === 0){
                        _page = pages[path]
                    }
                    else{
                        const isPage = loadPage(path,_page)

                        if(isPage){
                            setPageName(path)
                        }  else

                        {
                            if(_page['index'] && index !== 2){
                                setPageName('index')
                            }
                            throw 'send through param or fail';
                        }
                    }


                })



            }
            catch{

                try{
                    _page['index']()
                }catch(err) {

                    if(err instanceof TypeError ){
                        setParam(paths.pop())
                        console.log('send through params')
                    }else{
                        console.log('return 404')
                        // // _page = <>404</>
                    }

                }

            }
            setPage(_page)

        }


    },[paths])



    if(page){
        return(

            <Container param={param} Comp={page[pageName]}/>
        )
    }else{
        return(
            <></>
        )

    }

}


export default App;