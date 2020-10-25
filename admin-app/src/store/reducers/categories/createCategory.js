import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    isProcessing: false,
    err: null,
    data: {}
}

const createCategories = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CATEGORIES_CREATE_START || actionTypes.CATEGORIES_CREATE_SUB_START:
            return { ...state, isProcessing: true }
        case actionTypes.CATEGORIES_CREATE_SUCCESS || actionTypes.CATEGORIES_CREATE_SUB_SUCCESS:
            return { ...state, isProcessing: false, data: action.category, err: null }
        case actionTypes.CATEGORIES_CREATE_FAIL || actionTypes.CATEGORIES_CREATE_SUB_FAIL:
            return { ...state, isProcessing: false, err: action.err }
        default:
            return state
    }
}

export default createCategories