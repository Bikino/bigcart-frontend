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
    return async dispatch => {
        dispatch(getCategoryListStart())
        try {
            const response = await categorySvc.getCategoryList()
            const { data } = response
            let categories = []

            // for (let key in data) {
            //     if (data[key].parentId === '') {
            //         categories.push({ ...data[key], id: key, parent: '' })
            //     }
            //     else {
            //         categories.push({ ...data[key], id: key, parent: data[data[key].parentId].name })
            //     }
            // }

            for (let key in data) {
                if (data[key].parentId === '') {
                    categories.push({ ...data[key], id: key })
                }
            }

            for (let key in data) {
                if (data[key].parentId !== '') {
                    let parent = categories.find(c => c.id === data[key].parentId)

                    if (!parent.children) {
                        parent.children = []
                    }

                    parent.children.push({ ...data[key], id: key })
                }
            }

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
            dispatch(createCategorySuccess(data))
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
            dispatch(createSubCategorySuccess(data))
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

export const renameCategory = (newName, category) => {
    return async dispatch => {
        dispatch(renameCategoryStart())
        try {
            const response = await categorySvc.renameCategory(newName, category)
            const { data } = response
            dispatch(renameCategorySuccess(data))
        }
        catch (err) {
            dispatch(renameCategoryFail(new Error('error occured')))
        }
    }
}