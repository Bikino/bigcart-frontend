import { combineReducers } from 'redux'

import pendingProducts from './pendingProducts'
import products from './products'
import productDetail from './productDetail'

const productReducer = combineReducers({
    pendingProducts,
    products,
    productDetail,
})

export default productReducer