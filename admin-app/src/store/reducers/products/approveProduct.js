import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    isProcessing: false,
    err: null,
    id: ''
}

const approveProduct = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCTS_APPROVE_START:
            return { ...state, isProcessing: true }
        case actionTypes.PRODUCTS_APPROVE_SUCCESS:
            return { ...state, isProcessing: false, id: action.productId, err: null }
        case actionTypes.PRODUCTS_APPROVE_FAIL:
            return { ...state, isProcessing: false, err: action.err }
        default:
            return state
    }
}

export default approveProduct