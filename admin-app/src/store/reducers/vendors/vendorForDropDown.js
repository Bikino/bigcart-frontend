import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    isLoading: false,
    err: null,
    data: []
}

const vendorForDropDown = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.VENDOR_LOAD_FOR_DROPDOWN_START:
            return { ...state, isLoading: true }
        case actionTypes.VENDOR_LOAD_FOR_DROPDOWN_SUCCESS:
            return { ...state, isLoading: false, data: action.vendors, err: null }
        case actionTypes.VENDOR_LOAD_FOR_DROPDOWN_FAIL:
            return { ...state, isLoading: false, err: action.err }
        case actionTypes.VENDOR_APPROVE_SUCCESS:
            const newData = [...state.data]
            newData.push({ id: action.vendorId, name: action.vendorName })
            return { ...state, data: newData }
        default:
            return state
    }
}

export default vendorForDropDown