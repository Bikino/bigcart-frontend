import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

import * as actions from '../../../store/actions'
import CategoryTable from './CategoryTable'

const CategoryList = () => {

    const { isLoading, err, data } = useSelector(state => state.categoryReducer.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getCategoryList())
    }, [dispatch])

    let categoryTable = null
    if (!isLoading && !err & data.length !== 0) {
        categoryTable = <CategoryTable data={data} />
    }

    return (
        <CRow>
            <CCol xl='12' md='12'>
                <CCard>
                    <CCardHeader>
                        <h5 style={{ display: 'inline-block' }}>Category</h5>
                        <div className="card-header-actions">
                            <CButton color="success">Add category</CButton>
                        </div>
                    </CCardHeader>
                    <CCardBody>
                        {categoryTable}
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default CategoryList

