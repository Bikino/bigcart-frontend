import axios from 'axios'
//import { getToken } from '../helper/authentication'

export const getBuyerList = async () => {
    //let token = getToken()
    let url = `${process.env.REACT_APP_USER_API}/buyer`
    const response = await axios.get(url)
    return response
}