import React, { useState } from 'react'

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

const Login = () => {

  const [username, setUsername] = useState('')
  const [usernameTouched, setUsernameTouched] = useState(false)
  const [usernameErrorData, setUsernameErrorData] = useState({ hasError: false, message: '' })

  const [password, setPassword] = useState('')
  const [passwordTouched, setPasswordTouched] = useState(false)
  const [passwordErrorData, setpasswordErrorData] = useState({ hasError: false, message: '' })

  const [formValid, setFormValid] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (!formValid)
      return

    setSubmitted(true)

  }

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
      valid = valid && value.trim() !== '' && value.trim().match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)

      if (usernameTouched && !valid) {
        let message = ''
        message = value.trim() === '' ? 'Username cannot be blank' : message
        message = value.trim().match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) ? message : 'Please input a valid email'

        setUsernameErrorData({ message, hasError: true })
      }
      else
        setUsernameErrorData({ hasError: false })

    } else {
      valid = valid && value.length >= 6
      if (passwordTouched && !valid)
        setpasswordErrorData({ message: 'Minumum password length must be 6', hasError: true })
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
                        <CButton color="primary" className="px-4" type="submit">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
