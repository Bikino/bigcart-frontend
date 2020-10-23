import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

import * as actions from '../../../store/actions'
import ProductTable from './ProductTable'

const ProductList = (props) => {

    const dispatch = useDispatch()

    const { isLoading, err, data: products } = useSelector(state => state.productReducer.products)

    useEffect(() => {
        dispatch(actions.getProductList())
    }, [dispatch])

    let productTable = null
    if (!isLoading && !err && products.length > 0) {
        productTable = <ProductTable data={products} />
    }

    return (
        <>
            <CRow>
                <CCol xl='12' md='12'>
                    <CCard>
                        <CCardHeader>
                            <h5>Product List</h5>
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

export default ProductList