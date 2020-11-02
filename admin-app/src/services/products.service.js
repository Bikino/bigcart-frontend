import axios from 'axios'
//import { getToken } from '../helper/authentication'

export const getPendingProducts = async (categoryId, vendorId, productName) => {
    //let token = getToken()
    const theUrl = new URL('http://localhost:8001/vendorproduct/findProductForAdminDTO')
    theUrl.searchParams.append('status', 'pending')

    if (categoryId && categoryId > 0) {
        theUrl.searchParams.append('categoryId', categoryId)
    }

    if (vendorId && vendorId > 0) {
        theUrl.searchParams.append('vendorId', vendorId)
    }

    if (productName && productName.length > 0) {
        theUrl.searchParams.append('productName', productName)
    }

    let url = theUrl.href
    const response = await axios.get(url)
    return response
}

export const getProducts = async (categoryId, vendorId, productName) => {
    //let token = getToken()
    const theUrl = new URL('http://localhost:8001/vendorproduct/findProductForAdminDTO')
    theUrl.searchParams.append('status', 'approved')
    if (categoryId && categoryId > 0) {
        theUrl.searchParams.append('categoryId', categoryId)
    }

    if (vendorId && vendorId > 0) {
        theUrl.searchParams.append('vendorId', vendorId)
    }

    if (productName && productName.length > 0) {
        theUrl.searchParams.append('productName', productName)
    }

    let url = theUrl.href
    const response = await axios.get(url)
    return response
}

export const getProductDetail = async (productId, vendorId) => {
    //let token = getToken()
    let url = `http://localhost:8001/productvendors/${productId}/${vendorId}`
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