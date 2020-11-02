import axios from 'axios'
//import { getToken } from '../helper/authentication'

export const getBuyerList = async () => {
    //let token = getToken()
    let url = `http://localhost:9988/buyer`
    const response = await axios.get(url)
    return response
}