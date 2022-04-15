export const getUriParams = ({uri= window.location,query}) => {

    let url = new URL(uri)
    let searchParams = new URLSearchParams(url.search);
    return searchParams.get(query)
}