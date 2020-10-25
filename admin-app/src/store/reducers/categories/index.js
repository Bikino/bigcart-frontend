import { combineReducers } from 'redux'

import categories from './categories'
import createCategory from './createCategory'
import renameCategory from './renameCategory'
import categoryForDropDown from './categoryForDropDown'

const categoryReducer = combineReducers({
    categories,
    createCategory,
    renameCategory,
    categoryForDropDown,
})

export default categoryReducer