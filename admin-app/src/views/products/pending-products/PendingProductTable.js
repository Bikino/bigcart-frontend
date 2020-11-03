import React from 'react'
import { CButton } from '@coreui/react'

import history from '../../../helper/history'

const PendingProductTable = (props) => {

    const detailClick = (productId) => {
        history.push(`/products/${productId}`)
    }

    const checkBoxClick = (event, vendorProductId) => {
        const checked = event.target.checked
        if (checked) {
            props.setProductIdArray(prevState => {
                const newArray = prevState.slice()
                newArray.push(vendorProductId)
                return newArray
            })
        } else {
            props.setProductIdArray(prevState => {
                const newArray = prevState.slice()
                return newArray.filter(p => p !== vendorProductId)
            })
        }
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th></th>
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
                        <tr key={p.vendorProductId}>
                            <td><input type="checkbox" onClick={(evt) => checkBoxClick(evt, p.vendorProductId)} /></td>
                            <td>{p.categoryName}</td>
                            <td>{p.vendorName}</td>
                            <td>{p.productName}</td>
                            <td>${p.price}</td>
                            <td>{new Date(p.requestDate).toDateString()}</td>
                            <td>
                                <CButton size='sm' block color="info" onClick={() => { detailClick(p.vendorProductId) }}>Detail</CButton>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default PendingProductTable