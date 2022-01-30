import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {update, create} from "../../sdk/services/fauna";
import downIcon from 'url:../../assets/icons/down-circle.svg';
import StudioComponents from '../../sdk/studio/components'

const Dot  = () => {
    let params = useParams();
    const [loading, isLoading] = useState(true);


    useEffect(() => {
        // console.log(StudioComponents.Loader)
        // setTimeout(() => { isLoading(false)}, 3000);

    },[])


    return(

        <div className={'flex w-scree h-screen justify-center items-center bg-black text-white'}>
            Hello {params.brand} from Dot
        </div>

    )
}

export  default Dot;