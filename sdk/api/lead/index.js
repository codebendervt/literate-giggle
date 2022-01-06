import {create} from "../../services/fauna";


const initLead = async (data) => {

    return await create(data,'leads')

}

export {initLead}