import config from '../config'

let _profile = {desc:'',socials:[]};

const save = async (id, data) => {

    try{
        data.data = JSON.stringify(data.data)
        await config.save(`${id}-profile`,data)
        return true

    }catch (e) {
        console.error(e.message)
        return false
    }
}

const get = async (id) => {

    try{
        let _data = await config.get(`${id}-profile`)


        if(_data.data == ""){
            _data.data = _profile
        }else{
            _data.data = JSON.parse(_data.data)
        }

        return _data
    }catch (e) {
        console.error('failing to get data',e.message)
    }
}

const removeSocial = async (pos,data,socials,id,setSocials,setProfile) => {


    let _socials = []

    if(socials.length > 0){
        socials.map((i,k) => {
            if(k != pos){
                _socials.push(i)
            }
        })
    }

    data.data.socials = _socials
    let isSave = await save(id,data)
    if(isSave)
        setProfile(data)
        setSocials([..._socials])

}
const goPublic = async (username,id) => {
    try{
        let isExist = await config.isExist(username)

        console.log(isExist)

        if(!isExist) {
            let _data = await config.get(username)
            _data.data = `${id}-profile`

            let _profile = await get(id)

            _profile.data.username = username;

            await save(id,_profile)
            await config.save(username,_data)
        }else{

            throw 'username exist'
        }

        return true
    }catch (err){
        console.log('going public', err)
        return false
    }

}

const getPublic = async (username) => {

    try{
        let _data = await config.get(username)

        let publicData = await get(_data.data)

        return publicData
    }catch (err){

        return Object.create({})
    }

}


const deleteItem = async () => {
    throw 'Impementation required'
}

export {save,deleteItem,get,removeSocial,goPublic, getPublic}