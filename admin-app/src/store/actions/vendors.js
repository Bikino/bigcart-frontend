import * as actionTypes from './actionTypes'
import * as vendorSvc from '../../services/vendors.service'
import { showAlertSuccess, showAlertError } from './alert'

const getPendingVendorsStart = () => ({
    type: actionTypes.VENDOR_GET_PENDING_LIST_START
})

const getPendingVendorsFail = (err) => ({
    type: actionTypes.VENDOR_GET_PENDING_LIST_FAIL,
    err
})

const getPendingVendorsSuccess = (vendors) => ({
    type: actionTypes.VENDOR_GET_PENDING_LIST_SUCCESS,
    vendors
})

export const getPendingVendorList = () => (
    async dispatch => {
        dispatch(getPendingVendorsStart())
        try {
            const response = await vendorSvc.getPendingVendorList()
            const { data } = response
            dispatch(getPendingVendorsSuccess(data))
        }
        catch (err) {
            dispatch(getPendingVendorsFail(new Error('error occured')))
        }
    }
)

const getVendorListStart = () => ({
    type: actionTypes.VENDOR_GET_LIST_START
})

const getVendorListFail = (err) => ({
    type: actionTypes.VENDOR_GET_LIST_FAIL,
    err
})

const getVendorListSuccess = (vendors) => ({
    type: actionTypes.VENDOR_GET_LIST_SUCCESS,
    vendors
})

export const getVendorList = () => (
    async dispatch => {
        dispatch(getVendorListStart())
        try {
            const response = await vendorSvc.getVendorList()
            const { data } = response
            dispatch(getVendorListSuccess(data))
        }
        catch (err) {
            dispatch(getVendorListFail(new Error('error occured')))
        }
    }
)

const approveVendorStart = () => ({
    type: actionTypes.VENDOR_APPROVE_START
})


const approveVendorFail = (err) => ({
    type: actionTypes.VENDOR_APPROVE_FAIL,
    err
})

const approveVendorSuccess = (vendorId, vendorName) => ({
    type: actionTypes.VENDOR_APPROVE_SUCCESS,
    vendorId,
    vendorName,
})

export const approveVendor = (id) => {
    return async (dispatch, getState) => {
        dispatch(approveVendorStart())
        try {
            await vendorSvc.approveVendor(id)
            const state = getState()
            const { data } = state.vendorReducer.pendingVendors
            const vendor = data.find(v => v.id === id)
            dispatch(approveVendorSuccess(id, vendor.companyName))
            dispatch(showAlertSuccess('Vendor has been approved!'))
        }
        catch (err) {
            dispatch(approveVendorFail(new Error('error occured')))
            dispatch(showAlertError('Error occured'))
        }
    }
}

const declineVendorStart = () => ({
    type: actionTypes.VENDOR_DECLINE_START
})


const declineVendorFail = (err) => ({
    type: actionTypes.VENDOR_DECLINE_FAIL,
    err
})

const declineVendorSuccess = (vendorId) => ({
    type: actionTypes.VENDOR_DECLINE_SUCCESS,
    vendorId
})

export const declineVendor = (id) => {
    return async dispatch => {
        dispatch(declineVendorStart())
        try {
            await vendorSvc.declineVendor(id)
            dispatch(declineVendorSuccess(id))
            dispatch(showAlertSuccess('Vendor has been declined!'))
        }
        catch (err) {
            dispatch(declineVendorFail(new Error('error occured')))
            dispatch(showAlertError('Error occured'))
        }
    }
}


const loadVendorForDropDownStart = () => ({
    type: actionTypes.VENDOR_LOAD_FOR_DROPDOWN_START
})

const loadVendorForDropDownFail = (err) => ({
    type: actionTypes.VENDOR_LOAD_FOR_DROPDOWN_FAIL,
    err
})

const loadVendorForDropDownSuccess = (vendors) => ({
    type: actionTypes.VENDOR_LOAD_FOR_DROPDOWN_SUCCESS,
    vendors
})

export const loadVendorForDropDown = () => (
    async dispatch => {
        dispatch(loadVendorForDropDownStart())
        try {
            const response = await vendorSvc.getVendorList()
            const { data } = response
            const vendors = data.map(v => ({ id: v.id, name: v.companyName }))

            dispatch(loadVendorForDropDownSuccess(vendors))
        }
        catch (err) {
            dispatch(loadVendorForDropDownFail(new Error('error occured')))
        }
    }
)