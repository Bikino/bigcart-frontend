import React from 'react'
import { useDispatch } from 'react-redux'

import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

import history from '../helper/history'
import * as actions from '../store/actions'
import { clearToken } from '../helper/authentication'
import AuthContext from '../context/auth-context'

const TheLayout = () => {

  const dispatch = useDispatch()
  const logoutHandler = () => {
    dispatch(actions.userLogout())
    clearToken()
    history.push('/login')
  }

  return (
    <AuthContext.Provider value={{ logout: logoutHandler }}>
      <div className="c-app c-default-layout">
        <TheSidebar />
        <div className="c-wrapper">
          <TheHeader />
          <div className="c-body">
            <TheContent />
          </div>
          <TheFooter />
        </div>
      </div>
    </AuthContext.Provider>
  )
}

export default TheLayout
