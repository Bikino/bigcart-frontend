import { combineReducers } from 'redux'

import pendingVendors from './pendingVendors'
import vendors from './vendors'

const vendorReducer = combineReducers({
    pendingVendors,
    vendors,
})

export default vendorReducer