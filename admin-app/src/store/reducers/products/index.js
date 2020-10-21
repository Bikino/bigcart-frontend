import { combineReducers } from 'redux'

import newProducts from './newProducts'

const productReducer = combineReducers({
    newProducts
})

export default productReducer