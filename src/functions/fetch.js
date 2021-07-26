async function apiFetch(busqueda) {

    const url = 'https://api.giphy.com/v1/gifs/search?api_key=mhrivlYNEt6Hy4Qx6C80ZZ8mCOBa5O83&q='
    const resp = await fetch(url + busqueda)
    const data = await resp.json()
    console.log(data.data)
    return data
}
apiFetch("Hunter X")

export default apiFetch