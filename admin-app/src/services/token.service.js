import axios from 'axios'

export const auth = async (email, password) => {
    const apiKey = process.env.REACT_APP_GOOGLE_KEY
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
    const response = await axios.post(url, {
        email,
        password,
        returnSecureToken: true
    })
    return response
}

// export const auth = async (email, password) => {
//     let url = `${process.env.REACT_APP_GATEWAY_API}/oauth/token?grant_type=password&username=${email}&password=${password}`
//     const response = await axios.post(url, {}, {
//         auth: {
//             username: "bigcart",
//             password: "pin"
//         }
//     })
//     return response
// }