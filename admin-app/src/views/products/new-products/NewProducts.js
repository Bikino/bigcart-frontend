
import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

const NewProducts = (props) => {
    return (
        <>
            <CRow>
                <CCol xl='12' md='12'>
                    <CCard>
                        <CCardHeader>
                            New products
                        </CCardHeader>
                        <CCardBody>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Vendor</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Date Posted</th>
                                        <th style={{ textAlign: 'center' }} colSpan='3'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Apple</td>
                                        <td>iPhone 12</td>
                                        <td>$1,200</td>
                                        <td>10/21/2020</td>
                                        <td>
                                            <CButton size='sm' block color="info">Detail</CButton>
                                        </td>
                                        <td>
                                            <CButton size='sm' block color="success">Approve</CButton>
                                        </td>
                                        <td>
                                            <CButton size='sm' block color="danger">Decline</CButton>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default NewProducts