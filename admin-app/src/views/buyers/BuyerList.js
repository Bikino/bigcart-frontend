import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

import * as actions from '../../store/actions'
import BuyerTable from './BuyerTable'

const BuyerList = (props) => {

    const dispatch = useDispatch()
    const { isLoading, err, data: buyers } = useSelector(state => state.buyerReducer.buyers)

    useEffect(() => {
        dispatch(actions.getBuyerList())
    }, [dispatch])

    let buyerTable = null
    if (!isLoading && !err && buyers.length > 0) {
        buyerTable = <BuyerTable data={buyers} />
    }

    return (
        <>
            <CRow>
                <CCol xl='12' md='12'>
                    <CCard>
                        <CCardHeader>
                            <h5>Buyer List</h5>
                        </CCardHeader>
                        <CCardBody>
                            {buyerTable}
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default BuyerList