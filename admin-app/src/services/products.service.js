import axios from 'axios'
import { getToken } from '../helper/authentication'

export const getPendingProducts = async () => {
    let token = getToken()
    let url = `https://burger-udemy-2eecb.firebaseio.com/new-products.json?auth=${token}`
    const response = await axios.get(url)
    return response
}

export const getProducts = async () => {
    let token = getToken()
    let url = `https://burger-udemy-2eecb.firebaseio.com/products.json?auth=${token}`
    const response = await axios.get(url)
    return response
}

export const getProductDetail = async (id) => {
    let token = getToken()
    let url = `https://burger-udemy-2eecb.firebaseio.com/products.json?auth=${token}`
    const response = await axios.get(url)
    return response
}