import axios from 'axios'
import { getToken } from '../helper/authentication'

export const getPendingVendorList = async () => {
    let token = getToken()
    let url = `https://burger-udemy-2eecb.firebaseio.com/vendors.json?auth=${token}`
    const response = await axios.get(url)
    return response
}

export const getVendorList = async () => {
    let token = getToken()
    let url = `https://burger-udemy-2eecb.firebaseio.com/vendors.json?auth=${token}`
    const response = await axios.get(url)
    return response
}