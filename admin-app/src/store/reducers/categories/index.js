import { combineReducers } from 'redux'

import categories from './categories'

const categoryReducer = combineReducers({
    categories,
})

export default categoryReducer