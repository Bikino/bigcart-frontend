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

export const getProductDetail = async (vendorId, productId) => {
    //let token = getToken()
    let url = `http://localhost:8001/vendorproduct/findFullProductById/${vendorId}-${productId}`
    const response = await axios.get(url)
    return response
}

export const approveProduct = async (idArray) => {
    //let token = getToken()
    let url = `http://localhost:8001/vendorproduct/approveProduct`
    const data = idArray.map(id => ({ vendorProductId: id, approvalCode: 1 }))
    const response = await axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response
}

export const declineProduct = async (idArray) => {
    //let token = getToken()
    let url = `http://localhost:8001/vendorproduct/approveProduct`
    const data = idArray.map(id => ({ vendorProductId: id, approvalCode: 0 }))
    const response = await axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response
}

// const fakeApprove = (id) => {
//     return new Promise((resolve) => setTimeout(() => {
//         resolve({ data: true })
//     }, 1000))
// }