import * as actionTypes from '../../actions/actionTypes'

const initialState = {
    show: false,
    title: ''
}

const success = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ALERT_SUCCESS_SHOW: return { show: true, title: action.title }
        case actionTypes.ALERT_SUCCESS_HIDE: return { show: false, title: null }
        default: return state
    }
}

export default success