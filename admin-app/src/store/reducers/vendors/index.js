import { combineReducers } from 'redux'

import pendingVendors from './pendingVendors'
import vendors from './vendors'
import approveVendor from './approveVendor'
import declineVendor from './declineVendor'
import vendorForDropDown from './vendorForDropDown'

const vendorReducer = combineReducers({
    pendingVendors,
    vendors,
    approveVendor,
    declineVendor,
    vendorForDropDown,
})

export default vendorReducer