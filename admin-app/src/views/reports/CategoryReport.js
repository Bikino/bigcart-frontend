import React, { useEffect, useState } from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

import axios from 'axios'
import { useSelector } from 'react-redux'

const CategoryReport = () => {

    const [seletedId, setSeletedId] = useState('')
    const { isLoading, data, err } = useSelector(state => state.categoryReducer.categoryForDropDown)

    const getReport = (categoryId) => {
        axios.get(`${process.env.REACT_APP_REPORT_API}/order/vendor/${categoryId}`, {
            responseType: 'blob'
        })
            .then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
                window.open(url)
            })
            .catch(err => console.log(err))
    }

    let options = null
    if (!isLoading && !err && data.length > 0) {
        options = data.map(v => (
            <option key={v.categoryId} value={v.categoryId}>{v.name}</option>
        ))
    }

    useEffect(() => {
        if (!isLoading && !err && data.length > 0) {
            setSeletedId(data[0].categoryId)
        }
    }, [isLoading, err, data])

    return (
        <CRow>
            <CCol xl='12' md='12'>
                <CCard>
                    <CCardHeader>
                        <h5 style={{ display: 'inline-block' }}>Sales Report By Category</h5>
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

export default CategoryReport