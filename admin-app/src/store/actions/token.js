import * as actionTypes from './actionTypes'
import { saveToken } from '../../helper/authentication'
import history from '../../helper/history'
import { auth as authSvc } from '../../services/token.service'

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
            let { idToken, expiresIn } = await authSvc(username, password)
            dispatch(getTokenSuccess(idToken, expiresIn))
            saveToken(idToken)
            history.push('/')

        }
        catch (err) {
            dispatch(getTokenFail(new Error('Invalid username or password')))
        }
    }
}

// const fakeLogin = (username, password) => {
//     return new Promise((resolve) => setTimeout(() => {
//         let token = username + password
//         let expirationTime = 15000
//         resolve({ token, expirationTime })
//     }, 3000))
// }