import {useEffect, useState} from "react";


const theme = {primary: 'bg-black', secondary: 'bg-gray-200', accent:'text-indigo-800'}
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

function ActionBar ({isMenu, toggleMenu,children}) {
    const [SubPageView, setSubPage] = useState(false) 

 
    const get_action = (icon) => {
        return icon.props.isHome ? () => toggleMenu() : icon.props.route ?  () => window.location = icon.props.route : icon.props.subPage ? () => setSubPage(() => icon.props.subPage) : console.log('we are just here for display')
    }

    const LoadIcons = ({icons}) => {
    

        return(
            Array.isArray(icons) ?
                icons.map((icon) => {

                    action = get_action(icon);

                    return (
                    
                    <Icon action={action} key={icon.props.id}>
                        <div className="w-full flex flex-col items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current" fill="none" viewBox="0 0 24 24"> 
                            <g fill="none"><rect className="w-4 h-4 stroke-transparent  "></rect>
                            <path d="M3 9l9-7 9 7v13H3z"  className="stroke-current fill-current "></path></g>
                            </svg>
                            <p className="text-xs">{icon.props.value}</p>
                        </div>
                    </Icon>
                 
                    )
                })
            : 
            
            <Icon action={get_action(icons)} key={icons.props.id}>
            <div className="w-full flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 fill-current" fill="none" viewBox="0 0 24 24"> 
                <g fill="none"><rect className="w-4 h-4 stroke-transparent  "></rect>
                <path d="M3 9l9-7 9 7v13H3z"  className="stroke-current fill-current "></path></g>
                </svg>
                <p className="text-xs">{icons.props.value}</p>
            </div>
        </Icon>
          
        )
    }
 
    const closeSubPage = () => {
        setSubPage(false)
    }
    return(

        <div className={`${SubPageView ? 'w-full h-64' : 'w-auto '} rounded-t-xl  ${theme.secondary} items-center p-2  md:rounded-xl`}>
        
            {SubPageView ?  <SubPageView toggle={closeSubPage}/>  : !toggleMenu ?
                  <></>
                  :
                  <div className="flex space-x-8 justify-center ">
                      <LoadIcons icons={children.props.children}/>
                  </div>
            
            }
      

     </div>
    )
}


//main route engine
function App ({pages, hasBar, children}) {

    const [paths, setPaths] = useState()
    const [page, setPage] = useState( )
    const [param, setParam] = useState('')
    const [pageName, setPageName]= useState()
    const [query, setQuery]= useState()
    const [isMenu, toggleMenu] = useState(true)
    const [hasActionBar] = useState(hasBar)


    const homeMangement = () => {
        toggleMenu(!isMenu)
        sessionStorage.setItem('isMenu', isMenu)
    }

    const menuState = () => {

        const _state = sessionStorage.getItem('isMenu');

        if(_state === undefined)
            return true

        return _state === "true"
    }

    


    useEffect(() => {

        const uri = new URL(document.location.href);

        const path = uri.pathname.split('/');

        setQuery(uri.searchParams)

        path.shift()
        setPaths(path)

    },[])

    const loadPage = (path, prePath) => {
        return  prePath[path]
    }

    const initPage = (_page) => {
        setPage(_page)
    }

    // const findPage = (paths) => {
    //     // console.log(paths,'finding page')
    //     const path_length = paths.length
    //     console.log(path_length)
    //     let last_page;

    //     console.log(pages)

    //     paths.map((page, index) => {

    //         console.log(page)
    //         if(index !== 0 ){
    //             try{
    //                 setPageName(pages[page])
    //                 last_page = page

    //             }catch{
    //                 console.log(last_page,'last page')
    //                 // last_page = last_page['index']
    //             }finally{
    //                 console.log('throw an error ')
    //             }
    //             console.log(last_page,'last page')
              
    //         }else{
    //             setPageName(pages)
    //             try{
    //                 last_page = 'index'
    //             }catch{

    //                 last_page = 'error'
    //                 console.log(last_page,'last page')
    //             } 
    //             console.log(last_page,'last page')
    //         }
    //     })

    //     return last_page;

    // }

   
    useEffect(() => {
        let _page = () => <>loading</>;
 
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



    const LoadComponent = ({Component}) => {
        return <Component toggle={homeMangement}/>
    }

    if(page){
        return(

            <div  className={`${theme.primary} w-screen h-screen flex  ${menuState() ? "flex-row" : " flex-col items-center"}`}>

            {
                menuState() ?
                <>
                 <div className={`w-3/4 ${theme.secondary} md:bg-transparent md:w-1/4  h-full  rounded-r-lg `}>
                    <div className="w-full flex p-2">
                        <LoadComponent Component={() => children[0]}/>
                
                    </div>

                </div>

                <div className="w-full w-1/4 md:w-3/4 flex" onClick={() => homeMangement() }>
                    <div className="w-full"></div>
                </div>
                </>
               
                :

                <>
                
                <div className="flex-grow p-2 w-full ">
                    <Container param={param} Comp={page[pageName]} query={query}/>
                </div>

            <div className={`w-full flex md:p-8 shadow md:shadow-md md:max-w-md md:w-auto justify-center ${hasActionBar ? '':'hidden'} `}>
                <ActionBar  isMenu={isMenu} toggleMenu={homeMangement}>
                    {children[1]}
                </ActionBar>
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