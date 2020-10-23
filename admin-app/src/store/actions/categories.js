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

