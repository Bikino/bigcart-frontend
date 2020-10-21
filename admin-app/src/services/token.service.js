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

// export const auth2 = (email, password) => {
//     const apiKey = 'AIzaSyA0SwdbGkcfMjgvPTklbUJBADVKWQOY4MU'
//     let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`

//     return axios.post(url, {
//         email,
//         password,
//         returnSecureToken: true
//     })
// }