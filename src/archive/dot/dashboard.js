import {useEffect, useState} from "react";
import {update, create} from "../../../sdk/archive/services/fauna";
import downIcon from 'url:../../assets/icons/down-circle.svg';
import StudioComponents from '../../../sdk/archive/studio/components'

const DotDashboard  = () => {
    const [loading, isLoading] = useState(true);


    useEffect(() => {
        // console.log(StudioComponents.Loader)
        // setTimeout(() => { isLoading(false)}, 3000);

    },[])


    return(

        <div className={'flex w-scree h-screen justify-center items-center bg-black text-white'}>
            Hello Dot Dashboard
        </div>

    )
}

export  default DotDashboard;