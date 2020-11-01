import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

import * as actions from '../../../store/actions'
import PendingProductTable from './PendingProductTable'
import SearchBar from '../SearchBar'

const PendingProducts = (props) => {

    const dispatch = useDispatch()
    const [productIdArray, setProductIdArray] = useState([])
    const { isLoading, err, data: products } = useSelector(state => state.productReducer.pendingProducts)

    useEffect(() => {
        dispatch(actions.getNewProducts())
    }, [dispatch])

    useEffect(() => {
        setProductIdArray([])
    }, [products])

    const searchProducts = (categoryId, vendorId, productName) => {
        dispatch(actions.getNewProducts(categoryId, vendorId, productName))
    }

    let productTable = null
    if (!isLoading && !err) {
        if (products.length > 0) {
            productTable = <PendingProductTable data={products}
                setProductIdArray={setProductIdArray}
            />
        } else {
            productTable = <h4>No pending products</h4>
        }

    }

    const approveProducts = () => {
        dispatch(actions.approveProduct(productIdArray))
    }

    const declineProducts = () => {
        dispatch(actions.declineProduct(productIdArray))
    }

    return (
        <>
            <CRow>
                <CCol xl='12' md='12'>
                    <CCard>
                        <CCardHeader>
                            <h5 style={{ display: 'inline-block' }}>Pending products</h5>
                            <div className="card-header-actions">
                                <CButton color="success" disabled={productIdArray.length === 0}
                                    onClick={() => approveProducts()} style={{ marginRight: '5px' }}>Accept</CButton>
                                <CButton color="danger" disabled={productIdArray.length === 0}
                                    onClick={() => declineProducts()}>Decline</CButton>
                            </div>
                        </CCardHeader>
                        <CCardBody>
                            <SearchBar vendors={[]} categories={[]} searchProducts={searchProducts} />
                            {productTable}
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default PendingProducts