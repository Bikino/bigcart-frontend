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
        case actionTypes.VENDOR_APPROVE_SUCCESS:
            return removeVendorFromList(state, action)
        case actionTypes.VENDOR_DECLINE_SUCCESS:
            return removeVendorFromList(state, action)
        default:
            return state
    }
}

const removeVendorFromList = (state, action) => {
    const newData = [...state.data]
    const vendor = newData.find(p => p.id === action.vendorId)
    const index = newData.indexOf(vendor)
    newData.splice(index, 1)
    return { ...state, data: newData }

}

export default pendingProducts