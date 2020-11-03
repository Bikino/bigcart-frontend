import axios from 'axios'
//import { getToken } from '../helper/authentication'

export const getPendingVendorList = async () => {
    //let token = getToken()
    let url = `${process.env.REACT_APP_USER_API}/vendor/pending`
    const response = await axios.get(url)
    return response
}

export const getVendorList = async () => {
    //let token = getToken()
    let url = `${process.env.REACT_APP_USER_API}/vendor`
    const response = await axios.get(url)
    return response
}

export const approveVendor = async (id) => {
    //let token = getToken()
    let url = `${process.env.REACT_APP_USER_API}/vendor/status/${id}`
    const response = await axios.put(url, true, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return response
}

export const declineVendor = async (id) => {
    //let token = getToken()
    let url = `${process.env.REACT_APP_USER_API}/vendor/status/${id}`
    const response = await axios.put(url, 'false', {
        headers: {
            "Content-Type": "application/json"
        }
    })
    return response
}

// const fakeApprove = (id) => {
//     return new Promise((resolve, reject) => setTimeout(() => {
//         resolve({ data: { id } })
//     }, 1000))
// }