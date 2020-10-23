import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    isLoading: false,
    err: null,
    data: [],
    total: 0
}

const categories = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CATEGORIES_GET_LIST_START:
            return { ...state, isLoading: true }
        case actionTypes.CATEGORIES_GET_LIST_SUCCESS:
            return { ...state, isLoading: false, data: action.categories, err: null }
        case actionTypes.CATEGORIES_GET_LIST_FAIL:
            return { ...state, isLoading: false, err: action.err }
        default:
            return state
    }
}

export default categories