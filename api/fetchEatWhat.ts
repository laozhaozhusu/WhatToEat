export const fetchEatWhat = async (): Promise<string> => {
    return fetch('http://121.40.159.147:3000/api/breakfast').then(response => response.json()).then(res => res.data).catch(err => {
        console.error(err)
    })
}