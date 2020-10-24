import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    isLoading: false,
    err: null,
    data: [],
    total: 0
}

const pendingProducts = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.VENDOR_GET_PENDING_LIST_START:
            return { ...state, isLoading: true }
        case actionTypes.VENDOR_GET_PENDING_LIST_SUCCESS:
            return { ...state, isLoading: false, data: action.vendors, err: null }
        case actionTypes.VENDOR_GET_PENDING_LIST_FAIL:
            return { ...state, isLoading: false, err: action.err }
        default:
            return state
    }
}

export default pendingProducts