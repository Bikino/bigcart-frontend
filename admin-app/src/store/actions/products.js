import * as actionTypes from './actionTypes'
import * as productSvc from '../../services/products.service'

const getNewProductsStart = () => ({
    type: actionTypes.PRODUCTS_GET_NEW_LIST_START
})


const getNewProductsFail = (err) => ({
    type: actionTypes.PRODUCTS_GET_NEW_LIST_FAIL,
    err
})

const getNewProductsSuccess = (products) => ({
    type: actionTypes.PRODUCTS_GET_NEW_LIST_SUCCESS,
    products
})

export const getNewProducts = () => {
    return async dispatch => {
        dispatch(getNewProductsStart())
        try {
            const response = await productSvc.getPendingProducts()
            const products = []
            for (let key in response.data) {
                products.push({
                    ...response.data[key],
                    id: key
                })
            }
            dispatch(getNewProductsSuccess(products))
        }
        catch (err) {
            dispatch(getNewProductsFail(new Error('error occured')))
        }
    }
}

const getProductListStart = () => ({
    type: actionTypes.PRODUCTS_GET_LIST_START
})


const getProductListFail = (err) => ({
    type: actionTypes.PRODUCTS_GET_LIST_FAIL,
    err
})

const getProductListSuccess = (products) => ({
    type: actionTypes.PRODUCTS_GET_LIST_SUCCESS,
    products
})

export const getProductList = () => {
    return async dispatch => {
        dispatch(getProductListStart())
        try {
            const response = await productSvc.getProducts()
            const products = []
            for (let key in response.data) {
                products.push({
                    ...response.data[key],
                    id: key
                })
            }
            dispatch(getProductListSuccess(products))
        }
        catch (err) {
            dispatch(getProductListFail(new Error('error occured')))
        }
    }
}


const getProductDetailStart = () => ({
    type: actionTypes.PRODUCTS_GET_DETAIL_START
})


const getProductDetailFail = (err) => ({
    type: actionTypes.PRODUCTS_GET_DETAIL_FAIL,
    err
})

const getProductDetailSuccess = (product) => ({
    type: actionTypes.PRODUCTS_GET_DETAIL_SUCCESS,
    product
})

export const getProductDetail = (id) => {
    return async dispatch => {
        dispatch(getProductDetailStart())
        try {
            const response = await productSvc.getProductDetail(id)
            const { data } = response
            let product = null
            //mock
            product = data[id]
            dispatch(getProductDetailSuccess(product))
        }
        catch (err) {
            dispatch(getProductDetailFail(new Error('error occured')))
        }
    }
}

const approveProductStart = () => ({
    type: actionTypes.PRODUCTS_APPROVE_START
})


const approveProductFail = (err) => ({
    type: actionTypes.PRODUCTS_APPROVE_FAIL,
    err
})

const approveProductSuccess = (productId) => ({
    type: actionTypes.PRODUCTS_APPROVE_SUCCESS,
    productId
})

export const approveProduct = (id) => {
    return async dispatch => {
        dispatch(approveProductStart())
        try {
            const response = await productSvc.approveProduct(id)
            const { data } = response
            const { id: productId } = data
            dispatch(approveProductSuccess(productId))
        }
        catch (err) {
            dispatch(approveProductFail(new Error('error occured')))
        }
    }
}

const declineProductStart = () => ({
    type: actionTypes.PRODUCTS_DECLINE_START
})


const declineProductFail = (err) => ({
    type: actionTypes.PRODUCTS_DECLINE_FAIL,
    err
})

const declineProductSuccess = (productId) => ({
    type: actionTypes.PRODUCTS_DECLINE_SUCCESS,
    productId
})

export const declineProduct = (id) => {
    return async dispatch => {
        dispatch(declineProductStart())
        try {
            const response = await productSvc.declineProduct(id)
            const { data } = response
            const { id: productId } = data
            dispatch(declineProductSuccess(productId))
        }
        catch (err) {
            dispatch(declineProductFail(new Error('error occured')))
        }
    }
}