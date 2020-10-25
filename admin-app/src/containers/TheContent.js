import React, { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'
import Swal from 'sweetalert2/dist/sweetalert2'

import 'sweetalert2/src/sweetalert2.scss'
// routes config
import routes from '../routes'
import * as actions from '../store/actions'


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {

  const { show: showSuccess, title: successTitle } = useSelector(state => state.alertReducer.success)
  const { show: showError, title: errorTitle } = useSelector(state => state.alertReducer.error)

  const dispatch = useDispatch()

  useEffect(() => {
    if (showSuccess) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: successTitle,
        showConfirmButton: false,
        timer: 2000,
        onClose: () => {
          dispatch(actions.hideAlertSuccess())
        }
      })
    }
  }, [showSuccess, successTitle, dispatch])

  useEffect(() => {
    if (showError) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: errorTitle,
        showConfirmButton: false,
        timer: 2000,
        onClose: () => {
          dispatch(actions.hideAlertError())
        }
      })
    }
  }, [showError, errorTitle, dispatch])

  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <CFade>
                      <route.component {...props} />
                    </CFade>
                  )} />
              )
            })}
            <Redirect from="/" to="/dashboard" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
