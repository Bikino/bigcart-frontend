import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    isProcessing: false,
    err: null,
    data: {}
}

const renameCategories = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CATEGORIES_RENAME_START:
            return { ...state, isProcessing: true }
        case actionTypes.CATEGORIES_RENAME_SUCCESS:
            return { ...state, isProcessing: false, newName: action.category, err: null }
        case actionTypes.CATEGORIES_RENAME_FAIL:
            return { ...state, isProcessing: false, err: action.err }
        default:
            return state
    }
}

export default renameCategories