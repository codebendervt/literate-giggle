import dfx from './dfx'



const isExist = async (id) => {
    return await dfx.hello.data_exist(id)
}

export default isExist