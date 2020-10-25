import * as actionTypes from './actionTypes'

export const showAlertSuccess = (title) => ({
    type: actionTypes.ALERT_SUCCESS_SHOW,
    title
})

export const hideAlertSuccess = () => ({
    type: actionTypes.ALERT_SUCCESS_HIDE
})

export const showAlertError = (title) => ({
    type: actionTypes.ALERT_ERROR_SHOW,
    title
})

export const hideAlertError = () => ({
    type: actionTypes.ALERT_ERROR_HIDE
})