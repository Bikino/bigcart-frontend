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