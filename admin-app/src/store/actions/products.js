import * as actionTypes from './actionTypes'
import * as productSvc from '../../services/products.service'
import { showAlertError, showAlertSuccess } from './alert'

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

export const getNewProducts = (categoryId = 0, vendorId = 0, productName = '') => {
    return async dispatch => {
        dispatch(getNewProductsStart())
        try {
            const response = await productSvc.getPendingProducts(categoryId, vendorId, productName)
            const products = []
            response.data.forEach(p => {
                products.push({
                    vendorProductId: p.vendorProductId,
                    categoryId: p.categoryId,
                    categoryName: p.categoryName,
                    vendorId: p.vendorId,
                    vendorName: p.vendorName,
                    productName: p.productName,
                    price: p.price,
                    requestDate: p.requestDate,
                })
            })
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

export const getProductList = (categoryId = 0, vendorId = 0, productName = '') => {
    return async dispatch => {
        dispatch(getProductListStart())
        try {
            const response = await productSvc.getProducts(categoryId, vendorId, productName)
            const products = []
            response.data.forEach(p => {
                products.push({
                    vendorProductId: p.vendorProductId,
                    categoryId: p.categoryId,
                    vendorId: p.vendorId,
                    categoryName: p.categoryName,
                    vendorName: p.vendorName,
                    productName: p.productName,
                    price: p.price,
                    requestDate: p.requestDate,
                })
            })
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

export const getProductDetail = (productId, vendorId) => {
    return async dispatch => {
        dispatch(getProductDetailStart())
        try {
            const response = await productSvc.getProductDetail(productId, vendorId)
            const { data } = response
            dispatch(getProductDetailSuccess(data))
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

const approveProductSuccess = (productIdArray) => ({
    type: actionTypes.PRODUCTS_APPROVE_SUCCESS,
    productIdArray
})

export const approveProduct = (idArray) => {
    return async dispatch => {
        dispatch(approveProductStart())
        try {
            const response = await productSvc.approveProduct(idArray)
            const { data } = response
            if (data === 'ok') {
                dispatch(approveProductSuccess(idArray))
                dispatch(showAlertSuccess('Products has been approved!'))
            }
            else {
                dispatch(approveProductFail(new Error('error occured')))
                dispatch(showAlertError('Error occured'))
            }
        }
        catch (err) {
            dispatch(approveProductFail(new Error('error occured')))
            dispatch(showAlertError('Error occured'))
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

const declineProductSuccess = (productIdArray) => ({
    type: actionTypes.PRODUCTS_DECLINE_SUCCESS,
    productIdArray
})

export const declineProduct = (idArray) => {
    return async dispatch => {
        dispatch(declineProductStart())
        try {
            const response = await productSvc.declineProduct(idArray)
            const { data } = response
            if (data === 'ok') {
                dispatch(declineProductSuccess(idArray))
                dispatch(showAlertSuccess('Product has been declined!'))
            } else {
                dispatch(declineProductFail(new Error('error occured')))
                dispatch(showAlertError('Error occured'))
            }
        }
        catch (err) {
            dispatch(declineProductFail(new Error('error occured')))
            dispatch(showAlertError('Error occured'))
        }
    }
}