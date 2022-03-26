import {create} from '../../services/fauna.js'


type Log = {
    title : string,
    msg: string
}

const index = async (data: Log, req: any) => {

    try{
        await create(data,'log')
        return {status:200, msg: 'Logged'}
    }catch(err){
        console.log('state error ')
        return {status:400, msg: 'Could not log',body:err}
    }

}


export default {index}