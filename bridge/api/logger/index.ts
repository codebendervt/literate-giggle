import {create} from '../../services/fauna.js'


type Log = {
    title : string,
    msg: string
}

const index = async (data: Log, req: any) => {

    console.log(data)

    const _logger = await create(data,'log')

    console.log(_logger)
    return {status:200, msg: 'Logged'}
}


export default {index}