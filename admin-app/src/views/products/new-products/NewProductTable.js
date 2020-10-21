import React from 'react'
import { CButton } from '@coreui/react'

const NewProductTable = (props) => {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Vendor</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Date Posted</th>
                    <th style={{ textAlign: 'center' }} colSpan='3'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((p) => (
                        <tr>
                            <td>{p.category}</td>
                            <td>{p.vendor}</td>
                            <td>{p.name}</td>
                            <td>${p.price}</td>
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
                    ))
                }
            </tbody>
        </table>
    )
}

export default NewProductTable