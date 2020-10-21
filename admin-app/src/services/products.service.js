import axios from 'axios'
import { getToken } from '../helper/authentication'

export const getNewProducts = async () => {
    let token = getToken()
    let url = `https://burger-udemy-2eecb.firebaseio.com/new-products.json?auth=${token}`
    const response = await axios.get(url)
    return response
}