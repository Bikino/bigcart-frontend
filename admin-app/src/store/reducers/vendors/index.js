import { combineReducers } from 'redux'

import pendingVendors from './pendingVendors'
import vendors from './vendors'
import approveVendor from './approveVendor'
import declineVendor from './declineVendor'

const vendorReducer = combineReducers({
    pendingVendors,
    vendors,
    approveVendor,
    declineVendor,
})

export default vendorReducer