import dfx from './dfx'


const get = async (id) => {
    try{

        return await dfx.hello.get_data(id)

    }catch (e) {
        console.error('failing to save',e.message)
        return false
    }

}

export default get