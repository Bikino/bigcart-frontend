import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

import * as actions from '../../store/actions'

const VendorDetail = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
    }, [dispatch])

    return (
        <>
            <CRow>
                <CCol xl='12' md='12'>
                    <CCard>
                        <CCardHeader>
                            <h5>Vendor List</h5>
                        </CCardHeader>
                        <CCardBody>
                            Hello
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default VendorDetail