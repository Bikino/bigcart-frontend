import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    isProcessing: false,
    err: null,
    idArray: []
}

const declineProduct = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCTS_DECLINE_START:
            return { ...state, isProcessing: true }
        case actionTypes.PRODUCTS_DECLINE_SUCCESS:
            return { ...state, isProcessing: false, idArray: action.productIdArray, err: null }
        case actionTypes.PRODUCTS_DECLINE_FAIL:
            return { ...state, isProcessing: false, err: action.err }
        default:
            return state
    }
}

export default declineProduct