import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { USER_LOGGED_OUT } from '../actions/actionTypes'
import token from './token'

const tokenPersistConfig = {
    key: 'token',
    storage,
    blacklist: ['err', 'isLoading']
}

const appReducer = combineReducers({
    token: persistReducer(tokenPersistConfig, token),
})

const rootReducer = (state, action) => {
    if (action.type === USER_LOGGED_OUT) {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer