import { combineReducers } from 'redux'

import pendingProducts from './pendingProducts'
import products from './products'
import productDetail from './productDetail'
import approveProduct from './approveProduct'
import declineProduct from './declineProduct'

const productReducer = combineReducers({
    pendingProducts,
    products,
    productDetail,
    approveProduct,
    declineProduct,
})

export default productReducer