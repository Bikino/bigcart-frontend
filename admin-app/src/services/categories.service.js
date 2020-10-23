import axios from 'axios'
import { getToken } from '../helper/authentication'

export const getCategoryList = async () => {
    let token = getToken()
    let url = `https://burger-udemy-2eecb.firebaseio.com/categories.json?auth=${token}`
    const response = await axios.get(url)
    return response
}