import * as actionTypes from './actionTypes'
import * as categorySvc from '../../services/categories.service'

const getCategoryListStart = () => ({
    type: actionTypes.CATEGORIES_GET_LIST_START
})

const getCategoryListFail = (err) => ({
    type: actionTypes.CATEGORIES_GET_LIST_FAIL,
    err,
})

const getCategoryListSuccess = (categories) => ({
    type: actionTypes.CATEGORIES_GET_LIST_SUCCESS,
    categories,
})

export const getCategoryList = () => {
    return async (dispatch) => {
        dispatch(getCategoryListStart())
        try {
            const response = await categorySvc.getCategoryList()
            const { data } = response
            let categories = []
            data.forEach(c => {
                if (!c.parentCategoryId) {
                    categories.push({
                        categoryId: c.categoryId,
                        name: c.name
                    })
                }
            })

            data.forEach(c => {
                if (c.parentCategoryId) {
                    let parent = categories.find(cate => cate.categoryId === c.parentCategoryId)

                    if (!parent.children) {
                        parent.children = []
                    }

                    parent.children.push({
                        categoryId: c.categoryId,
                        name: c.name,
                        parentCategoryId: c.parentCategoryId
                    })
                }
            })
            dispatch(getCategoryListSuccess(categories))
        }
        catch (err) {
            dispatch(getCategoryListFail(new Error('error occured')))
        }
    }
}

const createCategoryStart = () => ({
    type: actionTypes.CATEGORIES_CREATE_START
})

const createCategoryFail = (err) => ({
    type: actionTypes.CATEGORIES_CREATE_FAIL,
    err,
})

const createCategorySuccess = (category) => ({
    type: actionTypes.CATEGORIES_CREATE_SUCCESS,
    category
})

export const createCategory = (cateName) => {
    return async dispatch => {
        dispatch(createCategoryStart())
        try {
            const response = await categorySvc.createCategory(cateName)
            const { data } = response
            if (Number.isInteger(data)) {
                dispatch(createCategorySuccess({ categoryId: data, name: cateName }))
            } else {
                dispatch(createCategoryFail(new Error('error occured')))
            }
        }
        catch (err) {
            dispatch(createCategoryFail(new Error('error occured')))
        }
    }
}

const createSubCategoryStart = () => ({
    type: actionTypes.CATEGORIES_CREATE_SUB_START
})

const createSubCategoryFail = (err) => ({
    type: actionTypes.CATEGORIES_CREATE_SUB_FAIL,
    err,
})

const createSubCategorySuccess = (category) => ({
    type: actionTypes.CATEGORIES_CREATE_SUB_SUCCESS,
    category
})

export const createSubCategory = (cateName, parentId) => {
    return async dispatch => {
        dispatch(createSubCategoryStart())
        try {
            const response = await categorySvc.createSubCategory(cateName, parentId)
            const { data } = response
            if (Number.isInteger(data)) {
                dispatch(createSubCategorySuccess({ categoryId: data, name: cateName, parentCategoryId: parentId }))
            } else {
                dispatch(createSubCategoryFail(new Error('error occured')))
            }
        }
        catch (err) {
            dispatch(createSubCategoryFail(new Error('error occured')))
        }
    }
}

const renameCategoryStart = () => ({
    type: actionTypes.CATEGORIES_RENAME_START
})

const renameCategoryFail = (err) => ({
    type: actionTypes.CATEGORIES_RENAME_FAIL,
    err,
})

const renameCategorySuccess = (category) => ({
    type: actionTypes.CATEGORIES_RENAME_SUCCESS,
    category
})

export const renameCategory = (newName, categoryId, parentCategoryId) => {
    return async dispatch => {
        dispatch(renameCategoryStart())
        try {
            await categorySvc.renameCategory(newName, categoryId)
            dispatch(renameCategorySuccess({ name: newName, categoryId, parentCategoryId }))
        }
        catch (err) {
            dispatch(renameCategoryFail(new Error('error occured')))
        }
    }
}

const loadCategoryForDropDownStart = () => ({
    type: actionTypes.CATEGORY_LOAD_FOR_DROPDOWN_START
})

const loadCategoryForDropDownFail = (err) => ({
    type: actionTypes.CATEGORY_LOAD_FOR_DROPDOWN_FAIL,
    err
})

const loadCategoryForDropDownSuccess = (categories) => ({
    type: actionTypes.CATEGORY_LOAD_FOR_DROPDOWN_SUCCESS,
    categories
})

export const loadCategoryForDropDown = () => (
    async dispatch => {
        dispatch(loadCategoryForDropDownStart())
        try {
            const response = await categorySvc.getCategoryList()
            const { data } = response
            dispatch(loadCategoryForDropDownSuccess(data))
        }
        catch (err) {
            dispatch(loadCategoryForDropDownFail(new Error('error occured')))
        }
    }
)

const deleteCategoryStart = () => ({
    type: actionTypes.CATEGORIES_DELETE_START
})

const deleteCategoryFail = (err) => ({
    type: actionTypes.CATEGORIES_DELETE_FAIL,
    err,
})

const deleteCategorySuccess = (categoryId) => ({
    type: actionTypes.CATEGORIES_DELETE_SUCCESS,
    categoryId
})

export const deleteCategory = (categoryId) => (
    async dispatch => {
        dispatch(deleteCategoryStart())
        try {
            const response = await categorySvc.deleteCategory(categoryId)
            const { data } = response
            if (data === 'Category is deleted.') {
                dispatch(deleteCategorySuccess(categoryId))
            } else {
                dispatch(deleteCategoryFail(new Error('error occured')))
            }
        }
        catch (err) {
            dispatch(deleteCategoryFail(new Error('error occured')))
        }
    }
)