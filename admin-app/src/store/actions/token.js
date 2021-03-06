import * as actionTypes from './actionTypes'
import { saveToken } from '../../helper/authentication'
import history from '../../helper/history'
import { auth as authSvc } from '../../services/token.service'
import { loadVendorForDropDown } from './vendors'
import { loadCategoryForDropDown } from './categories'

const getTokenStart = () => ({
    type: actionTypes.TOKEN_GET_START
})

const getTokenFail = (err) => ({
    type: actionTypes.TOKEN_GET_FAIL,
    err
})

const getTokenSuccess = (token, expirationTime) => ({
    type: actionTypes.TOKEN_GET_SUCCESS,
    token,
    expirationTime
})

export const getToken = (username, password) => {
    return async dispatch => {
        dispatch(getTokenStart)
        try {
            let response = await authSvc(username, password)
            let { access_token, expires_in } = response.data
            if (!access_token)
                access_token = 'fake_token'
            saveToken(access_token)
            dispatch(getTokenSuccess(access_token, expires_in))
            dispatch(loadVendorForDropDown())
            dispatch(loadCategoryForDropDown())
            history.push('/')

        }
        catch (err) {
            dispatch(getTokenFail(new Error('Invalid username or password')))
        }
    }
}

export const userLogout = () => ({
    type: actionTypes.USER_LOGGED_OUT
})