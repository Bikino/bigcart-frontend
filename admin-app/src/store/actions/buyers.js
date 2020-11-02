import * as actionTypes from './actionTypes'
import * as buyerSvc from '../../services/buyers.service'

const getBuyersStart = () => ({
    type: actionTypes.BUYER_GET_LIST_START
})

const getBuyersFail = (err) => ({
    type: actionTypes.BUYER_GET_LIST_FAIL,
    err
})

const getBuyersSuccess = (buyers) => ({
    type: actionTypes.BUYER_GET_LIST_SUCCESS,
    buyers
})

export const getBuyerList = () => (
    async dispatch => {
        dispatch(getBuyersStart())
        try {
            const response = await buyerSvc.getBuyerList()
            const { data } = response            
            dispatch(getBuyersSuccess(data))
        }
        catch (err) {
            dispatch(getBuyersFail(new Error('error occured')))
        }
    }
)
