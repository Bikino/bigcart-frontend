import * as actionTypes from './actionTypes'
import { getNewProducts as getNewProductsSvc } from '../../services/products.service'

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
            const { data } = await getNewProductsSvc()
            dispatch(getNewProductsSuccess(data))
        }
        catch (err) {
            dispatch(getNewProductsFail(new Error('error occured')))
        }
    }
}