import React from 'react'
import { CButton } from '@coreui/react'

import history from '../../../helper/history'

const ProductTable = (props) => {

    const detailClick = (productId) => {
        history.push(`/products/${productId}`)
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Vendor</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Date Posted</th>
                    <th style={{ textAlign: 'center' }}>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((p) => (
                        <tr key={p.id}>
                            <td>{p.category}</td>
                            <td>{p.vendor}</td>
                            <td>{p.name}</td>
                            <td>${p.price}</td>
                            <td>10/21/2020</td>
                            <td>
                                <CButton size='sm' block color="info" onClick={() => { detailClick(p.id) }}>Detail</CButton>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default ProductTable