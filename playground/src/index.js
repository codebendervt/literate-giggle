import { useState } from "react"




// const index = () => {
//     const [isMenu, toggleMenu] = useState(false)
//     const [hasActionBar] = useState(false)

//     const homeMangement = (isMenu) => {

//             toggleMenu(!isMenu)
//             sessionStorage.setItem('isMenu', isMenu)
        
//     }

//     const menuState = () => {

//         return sessionStorage.getItem('isMenu') === "true" 
//     }


   
//     return (
      
//             <div  className={`bg-black w-screen h-screen flex  ${menuState() ? "flex-row" : " flex-col items-center"}`}>

//             {
//                 menuState() ?
//                 <>
//                  <div className="w-3/4 bg-gray-700 md:bg-transparent md:w-1/4  h-full flex p-2 rounded-r-lg ">
//                     <div className="w-full">
                    
//                     </div>

//                 </div>

//                 <div className="w-full w-1/4 md:w-3/4 flex" onClick={() => homeMangement(isMenu) }>
//                     <div className="w-full"></div>
//                 </div>
//                 </>
               
//                 :

//                 <>
                
//                 <div className="flex-grow p-2 w-full ">
//                     <div className="w-full h-full rounded"></div>
//                 </div>

//             <div className={`w-full flex md:p-8 shadow md:shadow-md md:max-w-md md:w-auto ${hasActionBar ? '':'hidden'} `}>
//                 <ActionBar  isMenu={isMenu} toggleMenu={homeMangement}/>
//             </div>  
//                 </>
//             }
             


//         </div>
        
      
//     )
// }



const index = () => {
    return (
        <div className="bg-black w-full h-full">
            well
        </div>
    )
}


const hello = () => {
    return (
        <div className="bg-black w-screen h-screen">

        </div>
    )
}

const error = () => {
    return (
        <div>
            error
        </div>
    )
}

export default {index,hello,error}