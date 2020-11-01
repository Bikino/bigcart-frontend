import axios from 'axios'

export const auth = async (email, password) => {
    const apiKey = 'AIzaSyA0SwdbGkcfMjgvPTklbUJBADVKWQOY4MU'
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
    const response = await axios.post(url, {
        email,
        password,
        returnSecureToken: true
    })
    return response
}

// export const auth = async (email, password) => {
//     //let url = `http://localhost:8100/oauth/token?grant_type=password&username=${email}&password=${password}`
//     let url = `http://localhost:8001/products/`
//     const response = await axios.get(url)
//     return response
// }