import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    isLoading: false,
    err: null,
    data: [],
    total: 0
}

const categories = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CATEGORIES_GET_LIST_START:
            return { ...state, isLoading: true }
        case actionTypes.CATEGORIES_GET_LIST_SUCCESS:
            return { ...state, isLoading: false, data: action.categories, err: null }
        case actionTypes.CATEGORIES_GET_LIST_FAIL:
            return { ...state, isLoading: false, err: action.err }
        /* category created*/
        case actionTypes.CATEGORIES_CREATE_SUCCESS:
            return { ...state, data: [...state.data, action.category] }
        /* sub category created*/
        case actionTypes.CATEGORIES_CREATE_SUB_SUCCESS:
            return subCategoryCreate(state, action)
        /* category renamed*/
        case actionTypes.CATEGORIES_RENAME_SUCCESS:
            return categoryRename(state, action)
        default:
            return state
    }
}

const subCategoryCreate = (state, action) => {
    const newData = [...state.data]
    const parentCategory = newData.find(c => c.id === action.category.parentId)
    if (!parentCategory.children)
        parentCategory.children = []

    parentCategory.children.push(action.category)

    return { ...state, data: newData }
}

const categoryRename = (state, action) => {
    console.log(action)
    const newData = [...state.data]
    if (action.category.parentId) {
        const parent = newData.find(c => c.id === action.category.parentId)
        const cate = parent.children.find(c => c.id === action.category.id)
        cate.name = action.category.name
    } else {
        const cate = newData.find(c => c.id === action.category.id)
        cate.name = action.category.name
    }
    return { ...state, data: newData }
}

export default categories