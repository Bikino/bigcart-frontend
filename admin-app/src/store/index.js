import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers/rootReducer'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['token', 'alertReducer']
}

const middleware = [thunkMiddleware]
if (process.env.NODE_ENV !== 'production') {
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(...middleware))
export const persistor = persistStore(store)