import { combineReducers } from 'redux'

import buyers from './buyers'

const buyerReducer = combineReducers({
    buyers,
})

export default buyerReducer