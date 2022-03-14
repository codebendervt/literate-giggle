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
                const _index = paths.length - 2
                try{
                    console.log(_index)
                    if (paths.lenfth == 0 || _index == 0){

                        _page['index']()
                    }
                    if(_index < 0){
                        _page['index']()
                        console.log('supposed to enter here')
                        _page[paths[0]]()
                    }else if(paths.length > 1) {

                        _page[paths[_index]]()
                        throw Error()
                    }



                }catch(err) {

                    console.log(err)
                    if(err.message.includes('param') ){
                        setParam(paths.pop())
                    }else{
                        try{
                            _page['error']()
                        }catch{
                            _page = pages;
                        }
                        setPageName('error')
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