import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    isProcessing: false,
    err: null,
    idArray: []
}

const approveProduct = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCTS_APPROVE_START:
            return { ...state, isProcessing: true }
        case actionTypes.PRODUCTS_APPROVE_SUCCESS:
            return { ...state, isProcessing: false, idArray: action.productIdArray, err: null }
        case actionTypes.PRODUCTS_APPROVE_FAIL:
            return { ...state, isProcessing: false, err: action.err }
        default:
            return state
    }
}

export default approveProduct