import * as actionTypes from './actionTypes'
import { saveToken } from '../../helper/authentication'
import history from '../../helper/history'

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
            let { token, expirationTime } = await fakeLogin(username, password)
            console.log(token)
            dispatch(getTokenSuccess(token, expirationTime))
            saveToken(token)
            history.push('/')

        }
        catch (err) {
            dispatch(getTokenFail(err))
        }
    }
}

const fakeLogin = (username, password) => {
    return new Promise((resolve) => setTimeout(() => {
        let token = username + password
        let expirationTime = 15000
        resolve({ token, expirationTime })
    }, 3000))
}