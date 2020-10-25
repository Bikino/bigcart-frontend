import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

import axios from 'axios'

const Report = () => {

    const getReport = (url) => {
        axios.get('https://localhost:44383/api/Candidates/pdf', {
            responseType: 'blob'
        })
            .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
                window.open(url)
            })
            .catch(err => console.log(err))
    }

    return (
        <CRow>
            <CCol xl='12' md='12'>
                <CCard>
                    <CCardHeader>
                        <h5 style={{ display: 'inline-block' }}>Sales Report</h5>
                    </CCardHeader>
                    <CCardBody>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Report