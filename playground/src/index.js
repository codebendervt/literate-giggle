import { useState } from "react"


const Icon = ({action,children}) => <div onClick={action} className="w-12 h-12 md:w-10 md:h-10 rounded-full lg:cursor-pointer ">{children}</div>

const ActionBar = ({isMenu, toggleMenu}) => {
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


const index = () => {
    const [isMenu, toggleMenu] = useState(false)

    const homeMangement = (isMenu) => {

            toggleMenu(!isMenu)
            sessionStorage.setItem('isMenu', isMenu)
        
    }

    const menuState = () => {

        return sessionStorage.getItem('isMenu') === "true" 
    }


   
    return (
      
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
                    <div className="w-full h-full rounded"></div>
                </div>

            <div className="w-full flex md:p-8 shadow md:shadow-md md:max-w-md md:w-auto">
                <ActionBar  isMenu={isMenu} toggleMenu={homeMangement}/>
            </div>  
                </>
            }
             


        </div>
        
      
    )
}

const hello = () => {
    return (
        <div className="bg-black w-screen h-screen">

        </div>
    )
}

export default {index,hello}