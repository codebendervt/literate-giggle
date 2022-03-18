

export const getUriParams = ({uri= window.location,query}) => {

    let url = new URL(uri)
    let searchParams = new URLSearchParams(url.search);
    return searchParams.get(query)
}

const getLocalStorage = (key) => {

    return localStorage.getItem(key)
}

const uid = () => {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substr(2)

    return crypto.randomUUID();

}

export default {getUriParams,getLocalStorage, uid}