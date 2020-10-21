import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    isLoading: false,
    err: null,
    data: [],
    total: 0
}

const newProducts = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCTS_GET_NEW_LIST_START:
            return { ...state, isLoading: true }
        case actionTypes.PRODUCTS_GET_NEW_LIST_SUCCESS:
            return { ...state, isLoading: false, data: action.products, err: null }
        case actionTypes.PRODUCTS_GET_NEW_LIST_FAIL:
            return { ...state, isLoading: false, err: action.err }
        default:
            return state
    }
}

export default newProducts