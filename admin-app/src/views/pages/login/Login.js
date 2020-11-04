import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Swal from 'sweetalert2/dist/sweetalert2'

import 'sweetalert2/src/sweetalert2.scss'

import * as actions from '../../../store/actions'

const Login = () => {

  const [username, setUsername] = useState('')
  const [usernameTouched, setUsernameTouched] = useState(false)
  const [usernameErrorData, setUsernameErrorData] = useState({ hasError: false, message: '' })

  const [password, setPassword] = useState('')
  const [passwordTouched, setPasswordTouched] = useState(false)
  const [passwordErrorData, setpasswordErrorData] = useState({ hasError: false, message: '' })
  const [formValid, setFormValid] = useState(false)

  const { isLoading, err } = useSelector(state => state.token)


  const dispatch = useDispatch()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (!formValid)
      return
    dispatch(actions.getToken(username, password))
  }

  useEffect(() => {
    if (!isLoading && err) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Invalid username or password',
        showConfirmButton: false,
        timer: 2000,
      })
    }
  }, [isLoading, err])

  const handleChange = (e) => {
    const { name, value } = e.target
    let isFormValid = false
    if (name === 'username') {
      if (!usernameTouched)
        setUsernameTouched(true)

      setUsername(value)
      isFormValid = checkValidity(value, name) && checkValidity(password, 'password')
    }

    if (name === 'password') {
      if (!passwordTouched)
        setPasswordTouched(true)

      setPassword(value)
      isFormValid = checkValidity(value, name) && checkValidity(username, 'username')
    }
    setFormValid(isFormValid)
  }

  const checkValidity = (value, inputType) => {
    let valid = true
    if (inputType === 'username') {
      valid = valid && value.trim()

      if (usernameTouched && !valid) {
        let message = ''
        message = value.trim() === '' ? 'Username cannot be blank' : message

        setUsernameErrorData({ message, hasError: true })
      }
      else
        setUsernameErrorData({ hasError: false })

    } else {
      valid = valid && value.length >= 3
      if (passwordTouched && !valid)
        setpasswordErrorData({ message: 'Minumum password length must be 3', hasError: true })
      else
        setpasswordErrorData({ hasError: false })
    }
    return valid
  }

  let usernameError = null
  if (usernameErrorData.hasError)
    usernameError = <em className="error invalid-feedback" style={{ display: 'block' }}>{usernameErrorData.message}</em>

  let passwordError = null
  if (passwordErrorData.hasError)
    passwordError = <em className="error invalid-feedback" style={{ display: 'block' }}>{passwordErrorData.message}</em>

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="5">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username" name="username" onChange={handleChange} autoComplete="username" />
                      {usernameError}
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" name="password" onChange={handleChange} autoComplete="current-password" />
                      {passwordError}
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" type="submit">Sign in</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login