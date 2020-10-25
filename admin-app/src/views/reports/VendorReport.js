import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

const VendorReport = () => {

    const [seletedId, setSeletedId] = useState('')

    const getReport = (seletedId) => {
        axios.get('https://localhost:44383/api/Candidates/pdf', {
            responseType: 'blob'
        })
            .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
                window.open(url)
            })
            .catch(err => console.log(err))
    }

    const { isLoading, data, err } = useSelector(state => state.vendorReducer.vendorForDropDown)
    let options = null
    if (!isLoading && !err && data.length > 0) {
        options = data.map(v => (
            <option key={v.id} value={v.id}>{v.name}</option>
        ))
    }

    useEffect(() => {
        if (!isLoading && !err && data.length > 0) {
            setSeletedId(data[0].id)
        }
    }, [])

    return (
        <CRow>
            <CCol xl='12' md='12'>
                <CCard>
                    <CCardHeader>
                        <h5 style={{ display: 'inline-block' }}>Sales Report By Vendor</h5>
                    </CCardHeader>
                    <CCardBody>
                        <div className='row'>
                            <div className='form-group col-md-6'>
                                <select className='form-control' value={seletedId} onChange={(e) => {
                                    setSeletedId(e.target.value)
                                }}>
                                    {options}
                                </select>
                            </div>
                            <div className='col-md-6'>
                                <button className='btn btn-primary' onClick={() => { getReport(seletedId) }}>View report</button>
                            </div>
                        </div>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default VendorReport