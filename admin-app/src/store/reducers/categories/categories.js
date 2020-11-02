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
        case actionTypes.CATEGORIES_DELETE_SUCCESS:
            return deleteCategory(state, action)
        default:
            return state
    }
}

const deleteCategory = (state, action) => {
    const newData = [...state.data]
    let theIndex = newData.findIndex(c => c.categoryId === action.categoryId)
    if (theIndex > -1) {
        newData.splice(theIndex, 1)
    }
    else {
        const parents = newData.filter(p => p.children)
        let parent = null
        let theIndex = -1
        parents.forEach(p => {                        
            let tempIndex = p.children.findIndex(c => c.categoryId === action.categoryId)
            if (tempIndex > -1) {
                parent = p
                theIndex = tempIndex
            }
        })

        if (parent) {
            parent.children.splice(theIndex, 1)
        }
    }
    return { ...state, data: newData }
}

const subCategoryCreate = (state, action) => {
    const newData = [...state.data]
    const parentCategory = newData.find(c => c.categoryId === action.category.parentCategoryId)
    if (!parentCategory.children)
        parentCategory.children = []

    parentCategory.children.push(action.category)

    return { ...state, data: newData }
}

const categoryRename = (state, action) => {
    const newData = [...state.data]
    if (action.category.parentCategoryId) {
        const parent = newData.find(c => c.categoryId === action.category.parentCategoryId)
        const cate = parent.children.find(c => c.categoryId === action.category.categoryId)
        cate.name = action.category.name
    } else {
        const cate = newData.find(c => c.categoryId === action.category.categoryId)
        cate.name = action.category.name
    }
    return { ...state, data: newData }
}

export default categories