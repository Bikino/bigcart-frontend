
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

import * as actions from '../../../store/actions'
import NewProductTable from './NewProductTable'

const NewProducts = (props) => {

    const dispatch = useDispatch()

    const { isLoading, err, data: products } = useSelector(state => state.productReducer.newProducts)

    useEffect(() => {
        dispatch(actions.getNewProducts())
    }, [])

    let productTable = null
    if (!isLoading && !err && products.length > 0) {
        productTable = <NewProductTable data={products} />
    }

    return (
        <>
            <CRow>
                <CCol xl='12' md='12'>
                    <CCard>
                        <CCardHeader>
                            New products
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

export default NewProducts