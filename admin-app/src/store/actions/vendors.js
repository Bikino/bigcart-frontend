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
            let vendors = []
            for (let key in data) {
                vendors.push({ ...data[key], id: key })
            }
            dispatch(getPendingVendorsSuccess(vendors))
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
            let vendors = []
            for (let key in data) {
                vendors.push({ ...data[key], id: key })
            }
            dispatch(getVendorListSuccess(vendors))
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

const approveVendorSuccess = (vendorId) => ({
    type: actionTypes.VENDOR_APPROVE_SUCCESS,
    vendorId
})

export const approveVendor = (id) => {
    return async dispatch => {
        dispatch(approveVendorStart())
        try {
            const response = await vendorSvc.approveVendor(id)
            const { data } = response
            const { id: vendorId } = data
            dispatch(approveVendorSuccess(vendorId))
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
            const response = await vendorSvc.declineVednor(id)
            const { data } = response
            const { id: vendorId } = data
            dispatch(declineVendorSuccess(vendorId))
            dispatch(showAlertSuccess('Vendor has been declined!'))
        }
        catch (err) {
            dispatch(declineVendorFail(new Error('error occured')))
            dispatch(showAlertError('Error occured'))
        }
    }
}