let faunadb;
let q;
let faunaSDK;

const init = (key, driver) => {

    try{
        if(driver){
            faunadb = driver,
                q = faunadb.query
        }else{
            faunadb = require('faunadb'),
                q = faunadb.query
        }
       faunaSDK = new faunadb.Client({
            secret: key,
            domain: 'db.fauna.com',
            // NOTE: Use the correct domain for your database's Region Group.
            port: 443,
            scheme: 'https',
        })
        
    }catch{
        console.log('unable to init')
    }
    
  
}
//add trycatch for devesive coding
const create = async (data,col) => {

    return await faunaSDK.query(
        q.Create(
            q.Collection(col),
            {data}
        )
    )
}

const read = async (id,col="theplug") => {

    //console.log("id tp read",id)
    return await faunaSDK.query(
        q.Get(
            q.Ref(
                q.Collection(col), id)
        )

    )
}

const update = async (data, id,col) => {


    return await faunaSDK.query(
        q.Update(
            q.Ref(q.Collection(col), id),
            {data}
        )
    )
}

const remove = async (id,col="theplug") => {

    console.log("removing the data",id)
    return await faunaSDK.query(
        q.Delete(q.Ref(q.Collection(col), id))
    )
}

const findById = async (id, index ="identity") =>{

    return await faunaSDK.query(
        q.Get(q.Match(q.Index(index), id))
    )
}


const findByIndex = async (id, index ="analyticIdentity ") =>{

    let result = await faunaSDK.query(
        q.Paginate(q.Match(q.Index(index), id)),
    )

    let exp = result.data.map((i) => q.Get(i))


    let data = await faunaSDK.query(exp)

    return data;
}

const getAll = async (index = "genus", size ={}) => {

    let result = await faunaSDK.query(
        q.Paginate(q.Documents(q.Collection(index)),size),
    )

    let exp = result.data.map((i) => q.Get(i))
    let data = await faunaSDK.query(exp)

    return data;
}


export {create,update,read,getAll,findByIndex,init}

