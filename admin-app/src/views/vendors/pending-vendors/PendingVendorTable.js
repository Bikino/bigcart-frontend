import React from 'react'
import { CButton } from '@coreui/react'

const PendingVendorTable = (props) => {

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Date Posted</th>
                    <th style={{ textAlign: 'center' }} colSpan='2'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((p) => (
                        <tr key={p.id}>
                            <td>{p.companyName}</td>
                            <td>{p.phone}</td>
                            <td>{p.email}</td>
                            <td>{new Date(p.registrationDate).toDateString()}</td>
                            <td>
                                <CButton size='sm' block color="success" onClick={() => props.approveVendorHandler(p.id)}>Approve</CButton>
                            </td>
                            <td>
                                <CButton size='sm' block color="danger" onClick={() => props.declineVendorHandler(p.id)}>Decline</CButton>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default PendingVendorTable