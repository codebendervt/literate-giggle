import {create} from "../../services/fauna";
import {defaultLead} from "./model";

const initLead = async (data) => {

    return await create(defaultLead(data.name,data.cell,data.email,data.id),'leads')

}

export {initLead}