import {useEffect, useState} from "react";

function Container ({Comp,param}) {

    return (
        <Comp param={param}></Comp>
    )

}

function Icon ({action,children}) {
    return(
<div onClick={action} className="w-12 h-12 md:w-10 md:h-10 rounded-full lg:cursor-pointer ">{children}</div>
    )

}

function ActionBar ({isMenu, toggleMenu}) {
    const [isSubPage, setSubPage] = useState(false) 
 
    return(
        <div className={`w-full ${isSubPage ? 'h-64' : ''} rounded-t-xl  bg-gray-800 items-center p-2  md:rounded-xl`}>
            
            {isSubPage && toggleMenu ?
                  <></>
                  :
                  <div className="flex space-x-8 justify-center ">
                  <Icon action={()=> console.log('hello world')}/>
                  <Icon action={() => setSubPage(true)}/>
                  <Icon action={() =>  toggleMenu(isMenu)}> 
                      <div className="w-full flex flex-col items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current" fill="none" viewBox="0 0 24 24"> 
                      <g fill="none"><rect className="w-4 h-4 stroke-transparent  "></rect>
                      <path d="M3 9l9-7 9 7v13H3z"  className="stroke-current fill-current "></path></g></svg>
                      <p className="text-xs">home</p>
                      </div>
        
                  </Icon>
                  <Icon/>
                  <Icon/>
                  </div>
            
            }
      

     </div>
    )
}


//main route engine
function App ({pages, hasBar}) {

    const [paths, setPaths] = useState()
    const [page, setPage] = useState( )
    const [param, setParam] = useState('')
    const [pageName, setPageName]= useState()
    const [isMenu, toggleMenu] = useState(false)
    const [hasActionBar] = useState(hasBar)


    const homeMangement = (isMenu) => {
        toggleMenu(!isMenu)
        sessionStorage.setItem('isMenu', isMenu)
    }

    const menuState = () => {
        return sessionStorage.getItem('isMenu') === "true" 
    }


    


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
                // TODO revisit in the near future
                const _index = paths.length - 2
                try{
                    if (paths.lenfth == 0 || _index == 0){

                        _page['index']()
                    }
                    if(_index < 0){
                        _page['index']()
                        _page[paths[0]]()
                    }else if(paths.length > 1) {

                        _page[paths[_index]]()
                        throw Error()
                    }



                }catch(err) {

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

            <div  className={`bg-black w-screen h-screen flex  ${menuState() ? "flex-row" : " flex-col items-center"}`}>

            {
                menuState() ?
                <>
                 <div className="w-3/4 bg-gray-700 md:bg-transparent md:w-1/4  h-full flex p-2 rounded-r-lg ">
                    <div className="w-full">
                    
                    </div>

                </div>

                <div className="w-full w-1/4 md:w-3/4 flex" onClick={() => homeMangement(isMenu) }>
                    <div className="w-full"></div>
                </div>
                </>
               
                :

                <>
                
                <div className="flex-grow p-2 w-full ">
                    <Container param={param} Comp={page[pageName]}/>
                </div>

            <div className={`w-full flex md:p-8 shadow md:shadow-md md:max-w-md md:w-auto ${hasActionBar ? '':'hidden'} `}>
                <ActionBar  isMenu={isMenu} toggleMenu={homeMangement}/>
            </div>  
                </>
            }
             


        </div>

    
        )
    }else{
        return(
            <></>
        )

    }

}



export default App;