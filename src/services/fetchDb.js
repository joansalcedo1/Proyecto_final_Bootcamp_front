const URL_API = 'http://localhost:3005/api/huecos/'

export async function fetchDb() {
    let huecos = []
    try {
        const data = await fetch(`${URL_API}`)
        const hueco = await data.json()
        if (!data.ok) throw new Error(`Error HTTP: ${data.status}`)
        huecos.push(hueco)
        return huecos[0]
    } catch (error) {
        console.error(error.message)
        console.log(error)
        return false
    }



}