

const getUriParams = ({uri= window.location,param}) => {

    let url = new URL(uri)
    let searchParams = new URLSearchParams(url.search);
    return searchParams.get(param)
}

const getLocalStorage = (key) => {

    return localStorage.getItem(key)
}

export default {getUriParams,getLocalStorage}