import axios from 'axios'
const baseUrl = 'http://localhost:3001/api'

const violentCrime = (querry) =>{
    const request = axios.post(baseUrl, querry)

    return request.then(request=>request.data)
}

const propertyCrime = (querry) =>{
    const request = axios.post(baseUrl, querry)
return request.then(request=>request.data)
}

export default {
    violentCrime: violentCrime,
    propertyCrime: propertyCrime
}