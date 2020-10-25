import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

import * as actions from '../../../store/actions'
import PendingProductTable from './PendingProductTable'

const PendingProducts = (props) => {

    const dispatch = useDispatch()

    const { isLoading, err, data: products } = useSelector(state => state.productReducer.pendingProducts)

    const approveProduct = (productId) => {
        dispatch(actions.approveProduct(productId))
    }

    const declineProduct = (productId) => {
        dispatch(actions.declineProduct(productId))
    }

    useEffect(() => {
        dispatch(actions.getNewProducts())
    }, [dispatch])

    let productTable = null
    if (!isLoading && !err && products.length > 0) {
        productTable = <PendingProductTable data={products}
            declineProductHandler={declineProduct}
            approveProductHandler={approveProduct} />
    }

    return (
        <>
            <CRow>
                <CCol xl='12' md='12'>
                    <CCard>
                        <CCardHeader>
                            <h5>Pending products</h5>
                        </CCardHeader>
                        <CCardBody>
                            {productTable}
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default PendingProducts