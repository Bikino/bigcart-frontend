import * as actionType from '../actions/actionTypes'

const initialState = {
    isLoading: false,
    err: null,
    token: null,
    expirationTime: 0,
}

const token = (state = initialState, action) => {
    switch (action.types) {
        case actionType.TOKEN_GET_START:
            return { ...state, isLoading: true }
        case actionType.TOKEN_GET_SUCCESS:
            return { ...state, token: action.token, isLoading: false }
        case actionType.TOKEN_GET_FAIL:
            return { ...state, err: action.err, isLoading: false }
        default: return state
    }
}

export default token