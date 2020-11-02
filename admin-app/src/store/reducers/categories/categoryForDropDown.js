import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    isLoading: false,
    err: null,
    data: []
}

const categoryForDropDown = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CATEGORY_LOAD_FOR_DROPDOWN_START:
            return { ...state, isLoading: true }
        case actionTypes.CATEGORY_LOAD_FOR_DROPDOWN_SUCCESS:
            return { ...state, isLoading: false, data: action.categories, err: null }
        case actionTypes.CATEGORY_LOAD_FOR_DROPDOWN_FAIL:
            return { ...state, isLoading: false, err: action.err }
        /* category created*/
        case actionTypes.CATEGORIES_CREATE_SUCCESS:
            return { ...state, data: [...state.data, action.category] }
        /* sub category created*/
        case actionTypes.CATEGORIES_CREATE_SUB_SUCCESS:
            return { ...state, data: [...state.data, action.category] }
        /* category renamed*/
        case actionTypes.CATEGORIES_RENAME_SUCCESS:
            return categoryRename(state, action)
        case actionTypes.CATEGORIES_DELETE_SUCCESS:
            return categoryDelete(state, action)
        default:
            return state
    }
}

const categoryDelete = (state, action) => {
    const newData = [...state.data]
    const theIndex = newData.findIndex(c => c.categoryId === action.categoryId)
    if (theIndex > -1) {
        newData.splice(theIndex, 1)
    }
    return { ...state, data: newData }
}

const categoryRename = (state, action) => {
    const newData = [...state.data]
    const cate = newData.find(c => c.categoryId === action.category.categoryId)
    cate.name = action.category.name
    return { ...state, data: newData }
}

export default categoryForDropDown