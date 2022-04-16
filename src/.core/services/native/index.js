export const getUriParams = ({uri= window.location,query}) => {

    let url = new URL(uri)
    let searchParams = new URLSearchParams(url.search);
    return searchParams.get(query)
}

export const uid = () => {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substr(2)

    return crypto.randomUUID();

}