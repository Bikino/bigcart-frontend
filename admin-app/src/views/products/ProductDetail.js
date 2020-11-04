import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { CCard, CCol, CRow, CCardBody, CCardHeader } from '@coreui/react'

import noImg from '../../assets/img/image_not_available.png'

import * as actions from '../../store/actions'

const ProductDetail = (props) => {

    const { id } = props.match.params
    const [imageUrl, setImageUrl] = useState(noImg)
    const dispatch = useDispatch()

    useEffect(() => {
        const vendorId = id.split('-')[0]
        const productId = id.split('-')[1]
        dispatch(actions.getProductDetail(vendorId, productId))
    }, [id, dispatch])

    const { isLoading, err, data } = useSelector(state => state.productReducer.productDetail)
    let content = <h4>Loading...</h4>

    const imgRef = useRef(null)

    useEffect(() => {
        if (!isLoading && !err && data) {
            axios.post('http://localhost:8001/product/image', data.vendorProduct.imageUrl, {
                responseType: 'blob',
                headers: {
                    'Accept': 'image/jpeg',
                    'Content-Type': 'image/jpeg'
                }
            }).then(response => {
                const imgUrl = window.URL.createObjectURL(new Blob([response.data]));
                setImageUrl(imgUrl)
            })
                .catch(err => { setImageUrl(noImg) })
        }
    }, [isLoading, err, data])

    if (!isLoading) {
        if (err || !data) {
            content = <h4>Could not load the product detail</h4>
        } else {
            content = (
                <CRow>
                    <CCol xl='12' md='12'>
                        <CCard>
                            <CCardHeader>
                                <h5>Product Detail</h5>
                            </CCardHeader>
                            <CCardBody>
                                <div>
                                    <h5>{data.product.name}</h5>
                                    <img ref={imgRef} style={{ width: '150px' }} src={imageUrl} alt='' />
                                    <hr />
                                    <h6 className='text-success'>Price: ${data.vendorProduct.price}</h6>
                                    <p className='text-primary'>{data.product.description}</p>
                                    <p className='text-primary'>{data.product.specifications}</p>
                                </div>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            )
        }
    }

    return content
}

export default ProductDetail