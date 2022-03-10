import config from '../../config'

let _bye = {desc:'',socials:[]};

const save = async (id, data) => {

    try{
        data.data = JSON.stringify(data.data)
        await config.save(`${id}-bye`,data)
        return true

    }catch (e) {
        console.error(e.message)
        return false
    }
}


export { save }