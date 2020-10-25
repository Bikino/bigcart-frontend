import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    isLoading: false,
    err: null,
    data: [],
    total: 0
}

const pendingProducts = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCTS_GET_NEW_LIST_START:
            return { ...state, isLoading: true }
        case actionTypes.PRODUCTS_GET_NEW_LIST_SUCCESS:
            return { ...state, isLoading: false, data: action.products, err: null }
        case actionTypes.PRODUCTS_GET_NEW_LIST_FAIL:
            return { ...state, isLoading: false, err: action.err }
        case actionTypes.PRODUCTS_APPROVE_SUCCESS:
            return removeProductFromList(state, action)
        case actionTypes.PRODUCTS_DECLINE_SUCCESS:
            return removeProductFromList(state, action)
        default:
            return state
    }
}

const removeProductFromList = (state, action) => {
    const newData = [...state.data]
    const product = newData.find(p => p.id === action.productId)
    const index = newData.indexOf(product)
    newData.splice(index, 1)
    return { ...state, data: newData }

}

export default pendingProducts