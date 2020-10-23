import { combineReducers } from 'redux'

import categories from './categories'
import createCategory from './createCategory'
import renameCategory from './renameCategory'

const categoryReducer = combineReducers({
    categories,
    createCategory,
    renameCategory,
})

export default categoryReducer