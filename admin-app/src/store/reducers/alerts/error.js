import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    show: false,
    title: ''
}

const error = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ALERT_ERROR_SHOW: return { show: true, title: action.title }
        case actionTypes.ALERT_ERROR_HIDE: return { show: false, title: null }
        default: return state
    }
}

export default error