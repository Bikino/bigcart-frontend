import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    isProcessing: false,
    err: null,
    id: ''
}

const approveVendor = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.VENDOR_APPROVE_START:
            return { ...state, isProcessing: true }
        case actionTypes.VENDOR_APPROVE_SUCCESS:
            return { ...state, isProcessing: false, id: action.vendorId, err: null }
        case actionTypes.VENDOR_APPROVE_FAIL:
            return { ...state, isProcessing: false, err: action.err }
        default:
            return state
    }
}

export default approveVendor