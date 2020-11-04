import * as actionTypes from './actionTypes'
import * as productService from '../../services/products.service'
import * as vendorService from '../../services/vendors.service'

const loadDashboardStart = () => ({
    type: actionTypes.DASHBOAR_LOAD_START
})

const loadDashboardFail = (err) => ({
    type: actionTypes.DASHBOAR_LOAD_FAIL,
    err
})

const loadDashboardSuccess = (data) => ({
    type: actionTypes.DASHBOAR_LOAD_SUCCESS,
    data
})

export const loadDashboard = () => {
    return async dispatch => {
        dispatch(loadDashboardStart())
        try {
            const pendingProdRes = await productService.getPendingProducts()
            const prodRes = await productService.getProducts('approved')
            const pendingVendorRes = await vendorService.getPendingVendorList()
            const vendorRes = await vendorService.getVendorList()

            const dashboardData = {
                pendingProducts: pendingProdRes.data.length,
                products: prodRes.data.length,
                pendingVendors: pendingVendorRes.data.length,
                vendors: vendorRes.data.length,
            }

            dispatch(loadDashboardSuccess(dashboardData))
        }
        catch (err) {
            dispatch(loadDashboardFail(err))
        }
    }
}