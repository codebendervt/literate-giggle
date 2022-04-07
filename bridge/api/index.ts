import test from './test.ts'
import fin from './fintech/index.ts'
import logger from './logger/index.ts'
import push from './push/index.ts'

const index = async () => {

    return {status:200, msg: 'OK'}
}


export default {test,index,fin,logger,push}