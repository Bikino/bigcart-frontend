import * as actionTypes from './actionTypes'
import * as vendorSvc from '../../services/vendors.service'

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