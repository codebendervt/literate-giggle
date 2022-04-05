import dfx from './dfx'


const save = async (id, data) => {
    try{
        await dfx.hello.update_data(id,data)
        return true
    }catch (e) {
        console.error('failing to save',e.message)
        return false
    }

}

export default save