
const index =() => {
    return {hello: 'index test'}
}

const get = () => {

    return {hello:'test'}
}

const post = (data: JSON) => {

    return data
}

export default {index, get,post};


