
const index = async (data:any) => {

    console.log(data,'posted data')

    return {status: 200, msg:'subscribed'}

}

const register = async (data:any) => {

    console.log(data)

    return {status: 200, msg:'subscribed'}

}


export default {index}