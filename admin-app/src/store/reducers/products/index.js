import { combineReducers } from 'redux'

import pendingProducts from './pendingProducts'
import products from './products'

const productReducer = combineReducers({
    pendingProducts,
    products,
})

export default productReducer