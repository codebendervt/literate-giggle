import { Temporal } from '@js-temporal/polyfill';
import {pageAnalytics} from "./model";
import {create} from "../../../sdk/archive/services/fauna";


const initAnalytics = async (id, domain, page,referer) => {

   return  await create(
        pageAnalytics(id,domain,Temporal.Now.timeZone().toJSON(),page,referer),
        'analytics'
    )
}


const trackPage = async (page) => {
    await initAnalytics(localStorage.getItem('id'),window.location.origin, page,document.referrer)
}


export {initAnalytics,trackPage}