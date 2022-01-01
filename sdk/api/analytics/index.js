import { Temporal } from '@js-temporal/polyfill';
import {pageAnalytics} from "./model";
import {create} from "../../services/fauna";


const initAnalytics = async (id, domain, page,referer) => {

   return  await create(
        pageAnalytics(id,domain,Temporal.Now.timeZone().toJSON(),page,referer),
        'analytics'
    )
}


export {initAnalytics}