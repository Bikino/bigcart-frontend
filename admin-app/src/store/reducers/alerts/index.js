import { combineReducers } from 'redux'

import success from './success'
import error from './error'

const alertReducer = combineReducers({
    success,
    error,
})

export default alertReducer