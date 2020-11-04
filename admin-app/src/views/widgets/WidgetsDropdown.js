import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
} from '@coreui/react'

import ChartLineSimple from '../charts/ChartLineSimple'

const WidgetsDropdown = ({ data }) => {
  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header={data.pendingVendors.toString()}
          text="Pending vendors"
          footerSlot={
            <ChartLineSimple
              pointed
              className="c-chart-wrapper mt-3 mx-3"
              style={{ height: '70px' }}
              dataPoints={[]}
              pointHoverBackgroundColor="primary"
              label="Members"
              labels="months"
            />
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header={data.vendors.toString()}
          text="Approved vendors"
          footerSlot={
            <ChartLineSimple
              pointed
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              dataPoints={[]}
              pointHoverBackgroundColor="info"
              options={{ elements: { line: { tension: 0.00001 } } }}
              label="Members"
              labels="months"
            />
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header={data.pendingProducts.toString()}
          text="Pending products"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{ height: '70px' }}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[]}
              options={{ elements: { line: { borderWidth: 2.5 } } }}
              pointHoverBackgroundColor="warning"
              label="Members"
              labels="months"
            />
          }
        >
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header={data.products.toString()}
          text="Approved products"
          footerSlot={
            <ChartLineSimple
              className="mt-3"
              style={{ height: '70px' }}
              backgroundColor="rgba(255,255,255,.2)"
              dataPoints={[]}
              options={{ elements: { line: { borderWidth: 2.5 } } }}
              pointHoverBackgroundColor="warning"
              label="Members"
              labels="months"
            />
          }
        >
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
