import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

import * as actions from '../../../store/actions'
import VendorTable from './VendorTable'

const VendorList = (props) => {

    const dispatch = useDispatch()
    const { isLoading, err, data: vendors } = useSelector(state => state.vendorReducer.vendors)

    useEffect(() => {
        dispatch(actions.getVendorList())
    }, [dispatch])

    let vendorTable = null
    if (!isLoading && !err && vendors.length > 0) {
        vendorTable = <VendorTable data={vendors} />
    }

    return (
        <>
            <CRow>
                <CCol xl='12' md='12'>
                    <CCard>
                        <CCardHeader>
                            <h5>Vendor List</h5>
                        </CCardHeader>
                        <CCardBody>
                            {vendorTable}
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default VendorList