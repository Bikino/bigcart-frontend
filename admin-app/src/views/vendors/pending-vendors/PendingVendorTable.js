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
                            <td>{p.name}</td>
                            <td>{p.phone}</td>
                            <td>{p.email}</td>
                            <td>10/21/2020</td>
                            <td>
                                <CButton size='sm' block color="success">Approve</CButton>
                            </td>
                            <td>
                                <CButton size='sm' block color="danger">Decline</CButton>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default PendingVendorTable