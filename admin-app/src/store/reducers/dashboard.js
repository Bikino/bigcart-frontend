import * as actionTypes from '../actions/actionTypes'

const initialState = {
    isLoading: false,
    err: null,
    data: null
}

const dashboard = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DASHBOAR_LOAD_START:
            return { ...state, isLoading: true }
        case actionTypes.DASHBOAR_LOAD_FAIL:
            return { ...state, isLoading: false, err: action.err }
        case actionTypes.DASHBOAR_LOAD_SUCCESS:
            return { ...state, isLoading: false, data: action.data }
        default:
            return state
    }
}

export default dashboard