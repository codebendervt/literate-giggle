

const getUriParams = ({uri= window.location,query}) => {

    let url = new URL(uri)
    let searchParams = new URLSearchParams(url.search);
    return searchParams.get(query)
}

const getLocalStorage = (key) => {

    return localStorage.getItem(key)
}

export default {getUriParams,getLocalStorage}