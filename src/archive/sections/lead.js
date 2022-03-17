import {useEffect, useState} from 'react';
import StudioForm from '../../../sdk/studio/form'
import {initLead} from '../../../bridge/api/lead'
import {trackPage} from "../../../bridge/api/analytics";
import StudioComponents from '../../../sdk/studio/components'
import {useNavigate} from "react-router-dom";

const Lead  = () => {
    let navigate = useNavigate();
    const [lead, setLead] = useState()
    const [loading, isLoading] = useState(true);

    useEffect(() => {
        const searchParams1 = new URLSearchParams(document.location.search);

        setLead(searchParams1.get('id'))

        if(!document.location.hostname.includes('localhost')){
            console.log('we would like you to come back')
            trackPage(document.location)
        }

        isLoading(false)
        
    },[])

    const handleSubmit = (data) => {
        isLoading(true)
        data.id = lead;
        const submitResponse = initLead(data);

        const handeResponse = async() => {

            const response = await submitResponse
            if(response.data){
                localStorage.setItem('lead',JSON.stringify(response.data))
                navigate('/home', { replace: true });
                // window.location = '/home'
            }
        }

        handeResponse();

    }
    
    return(

        loading ? <StudioComponents.Loader msg={'the next decade is yours'}/>  :      <div className={'w-screen h-screen bg-black text-white'}>
            <StudioForm submitHandler={handleSubmit}/>
        </div>


    )
}

export default Lead;