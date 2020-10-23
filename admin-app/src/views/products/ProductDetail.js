import { CCard, CCol, CRow, CCardBody, CCardHeader } from '@coreui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as actions from '../../store/actions'

const ProductDetail = (props) => {
    const { id } = props.match.params

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getProductDetail(id))
    }, [id, dispatch])

    const { isLoading, err, data } = useSelector(state => state.productReducer.productDetail)
    let content = <div>Loading...</div>

    if (!isLoading && !err && DataTransfer) {
        content = (
            <CRow>
                <CCol xl='12' md='12'>
                    <CCard>
                        <CCardHeader>
                            <h5>Product Detail</h5>
                        </CCardHeader>
                        <CCardBody>
                            <div>
                                <h5>{data.name} - {data.vendor}</h5>
                                <img style={{ width: '100px' }} src={data.img} alt='' />
                                <h6 className='text-success'>Price: ${data.price}</h6>
                                <p className='text-primary'>{data.description}</p>
                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        )
    }

    return (
        content
    )
}

export default ProductDetail