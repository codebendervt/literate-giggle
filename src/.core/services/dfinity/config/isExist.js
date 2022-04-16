import dfx from './dfx'



const isExist = async (id) => {
    return await dfx.backend.data_exist(id)
}

export default isExist