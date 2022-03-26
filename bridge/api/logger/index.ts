import {create,update,findByIndex} from '../../services/fauna.js'


type Log = {
    title : string,
    msg: string,
    count: number
    msgs: string[]
}

const index = async (data: Log, req: any) => {

    try{
        data.count = 0;
        data.msgs = [data.msg]
        await create(data,'log')

        return {status:200, msg: 'Logged'}
    }catch(err){

        if(err.message == 'instance not unique'){
            const _data = await  findByIndex(data.title,'title')
            _data[0].data.count = data.count + 1
            _data[0].data.msgs.push(data.msg)
            await update(_data[0].data,_data[0].ref.id,'log')

            return {status:200, msg: 'Log updated'}
        }

        return {status:400, msg: 'Could not log',body:err}
    }

}


export default {index}