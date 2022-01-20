import {useEffect, useState} from "react";
import {update, create} from "../../sdk/services/fauna";
import downIcon from 'url:../../assets/icons/down-circle.svg';
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
         <StudioComponents.Loader msg={'the next decade is yours'}/>

    )
}

export  default App;