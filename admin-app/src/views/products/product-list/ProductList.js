import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

import * as actions from '../../../store/actions'
import ProductTable from './ProductTable'
import SearchBar from '../SearchBar'

const ProductList = (props) => {

    const dispatch = useDispatch()

    const { isLoading, err, data: products } = useSelector(state => state.productReducer.products)

    const { data: categories } = useSelector(state => state.categoryReducer.categoryForDropDown)
    const { data: vendors } = useSelector(state => state.vendorReducer.vendorForDropDown)

    const searchProducts = (categoryId, vendorId, productName) => {
        dispatch(actions.getProductList(categoryId, vendorId, productName))
    }

    useEffect(() => {
        dispatch(actions.getProductList())
    }, [dispatch])

    let productTable = null
    if (!isLoading && !err) {
        if (products.length > 0) {
            productTable = <ProductTable data={products} />
        } else {
            productTable = <h4>No products</h4>
        }
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
                            <SearchBar vendors={vendors} categories={categories} searchProducts={searchProducts} />
                            {productTable}
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default ProductList