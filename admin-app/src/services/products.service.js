import axios from 'axios'
import { getToken } from '../helper/authentication'

// export const getPendingProducts = async () => {
//     let token = getToken()
//     let url = `https://burger-udemy-2eecb.firebaseio.com/new-products.json?auth=${token}`
//     const response = await axios.get(url)
//     return response
// }

export const getPendingProducts = async () => {
    let token = getToken()
    let url = `http://localhost:8001/productvendors/findPendingProductsDTO`
    const response = await axios.get(url, {
        params: {}
    })
    return response
}

export const fetchPendingProducts = async () => {
    let url = `http://localhost:8001/productvendors/findPendingProductsDTO`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    })
    return response
}


// export const getProducts = async () => {
//     let token = getToken()
//     let url = `https://burger-udemy-2eecb.firebaseio.com/products.json?auth=${token}`
//     const response = await axios.get(url)
//     return response
// }

export const getProducts = async () => {
    //let token = getToken()
    let url = `http://localhost:8001/products/`
    const response = await axios.get(url)
    return response
}

export const getProductDetail = async (id) => {
    let token = getToken()
    let url = `https://burger-udemy-2eecb.firebaseio.com/products.json?auth=${token}`
    const response = await axios.get(url)
    return response
}

export const approveProduct = async (id) => {
    //let token = getToken()
    //let url = `https://burger-udemy-2eecb.firebaseio.com/products.json?auth=${token}`
    const response = await fakeApprove(id)
    return response
}

export const declineProduct = async (id) => {
    //let token = getToken()
    //let url = `https://burger-udemy-2eecb.firebaseio.com/products.json?auth=${token}`
    const response = await fakeApprove(id)
    return response
}

const fakeApprove = (id) => {
    return new Promise((resolve) => setTimeout(() => {
        resolve({ data: true })
    }, 1000))
}