import React, { lazy, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'
import * as actions from '../../store/actions'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))

const Dashboard = () => {

  const dispatch = useDispatch()
  const { isLoading, err, data } = useSelector(state => state.dashboard)

  useEffect(() => {
    dispatch(actions.loadDashboard())
  }, [dispatch])

  let dashboard = <h1>Loading ...</h1>

  if (!isLoading && !err && data) {
    dashboard = (
      <>
        <WidgetsDropdown data={data} />
        <CCard>
          <CCardBody>
            <CRow>
              <CCol sm="5">
                <h4 id="traffic" className="card-title mb-0">Traffic</h4>
                <div className="small text-muted">November 2020</div>
              </CCol>
              <CCol sm="7" className="d-none d-md-block">
                <CButton color="primary" className="float-right">
                  <CIcon name="cil-cloud-download" />
                </CButton>
                <CButtonGroup className="float-right mr-3">
                  {
                    ['Day', 'Month', 'Year'].map(value => (
                      <CButton
                        color="outline-secondary"
                        key={value}
                        className="mx-0"
                        active={value === 'Month'}
                      >
                        {value}
                      </CButton>
                    ))
                  }
                </CButtonGroup>
              </CCol>
            </CRow>
            <MainChartExample style={{ height: '300px', marginTop: '40px' }} />
          </CCardBody>
          <CCardFooter>
            <CRow className="text-center">
              <CCol md="12" sm="12">

              </CCol>
            </CRow>
          </CCardFooter>
        </CCard>
      </>
    )
  }

  return dashboard
}

export default Dashboard
