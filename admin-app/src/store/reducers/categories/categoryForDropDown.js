import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    isLoading: false,
    err: null,
    data: []
}

const categoryForDropDown = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CATEGORY_LOAD_FOR_DROPDOWN_START:
            return { ...state, isLoading: true }
        case actionTypes.CATEGORY_LOAD_FOR_DROPDOWN_SUCCESS:
            return { ...state, isLoading: false, data: action.categories, err: null }
        case actionTypes.CATEGORY_LOAD_FOR_DROPDOWN_FAIL:
            return { ...state, isLoading: false, err: action.err }
        default:
            return state
    }
}

export default categoryForDropDown