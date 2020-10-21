import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers/rootReducer'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['token', 'alertReducer']
}

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const middleware = [thunkMiddleware]
if (process.env.NODE_ENV !== 'production') {
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middleware)))
export const persistor = persistStore(store)