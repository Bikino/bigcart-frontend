import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    isLoading: false,
    err: null,
    total: 0
}

const product = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCTS_GET_DETAIL_START:
            return { ...state, isLoading: true }
        case actionTypes.PRODUCTS_GET_DETAIL_SUCCESS:
            return { ...state, isLoading: false, data: action.product, err: null }
        case actionTypes.PRODUCTS_GET_DETAIL_FAIL:
            return { ...state, isLoading: false, err: action.err }
        default:
            return state
    }
}

export default product