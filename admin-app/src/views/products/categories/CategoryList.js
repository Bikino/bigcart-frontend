import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle, CRow } from '@coreui/react'

import * as actions from '../../../store/actions'
import CategoryTable from './CategoryTable'

const CategoryList = () => {

    const [modal, setModal] = useState(false)
    const [modalTitle, setModalTitle] = useState('')
    const [cateName, setcateName] = useState('')

    const [cateNewName, setCateNewName] = useState('')
    const [modalRename, setModalRename] = useState(false)

    const [currentId, setCurrentId] = useState('')

    const [isSub, setIsSub] = useState(false)
    const [parentCateId, setParentCateId] = useState(null)

    const { isLoading, err, data } = useSelector(state => state.categoryReducer.categories)
    const { isProcessing: renaming, err: renameErr, data: renameData } = useSelector(state => state.categoryReducer.renameCategory)
    const { isProcessing: creating, err: createErr, data: createData } = useSelector(state => state.categoryReducer.createCategory)

    const dispatch = useDispatch()

    const addCategoryClick = () => {
        setModalTitle('Add new category')
        setModal(true)
        setcateName('')
        setIsSub(false)
    }

    const renameCategoryClick = (currentName, category) => {
        setCateNewName(currentName)
        setCurrentId(category.cateId)
        setParentCateId(category.parentId)
        setModalRename(true)
        setIsSub(false)
    }

    const addSubCateClick = (parentName, parentId) => {
        setModalTitle(parentName + ' - add sub category')
        setModal(true)
        setcateName('')
        setIsSub(true)
        setParentCateId(parentId)
    }

    const saveCategory = () => {
        dispatch(actions.createCategory(cateName))
    }

    const saveSubCategory = () => {
        dispatch(actions.createSubCategory(cateName, parentCateId))
    }

    const renameCategory = () => {
        dispatch(actions.renameCategory(cateNewName, { cateId: currentId, parentId: parentCateId }))
    }

    useEffect(() => {
        dispatch(actions.getCategoryList())
    }, [dispatch])

    let categoryTable = null
    if (!isLoading && !err & data.length !== 0) {
        categoryTable = <CategoryTable data={data}
            addSubCate={addSubCateClick}
            renameCategory={renameCategoryClick} />
    }

    useEffect(() => {
        if (!renaming && (renameErr || renameData)) {
            setModalRename(false)
        }
    }, [renaming, renameErr, renameData])

    useEffect(() => {
        if (!creating && (createErr || createData)) {
            setModal(false)
        }
    }, [creating, createErr, createData])

    return (
        <>
            <CRow>
                <CCol xl='12' md='12'>
                    <CCard>
                        <CCardHeader>
                            <h5 style={{ display: 'inline-block' }}>Category</h5>
                            <div className="card-header-actions">
                                <CButton color="success" onClick={() => addCategoryClick()}>Add category</CButton>
                            </div>
                        </CCardHeader>
                        <CCardBody>
                            {categoryTable}
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

            <CModal
                show={modal}
                onClose={setModal}
            >
                <CModalHeader closeButton>
                    <CModalTitle>{modalTitle}</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CRow>
                        <CCol xl='12' md='12'>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type='text' className='form-control' value={cateName} onChange={(e) => setcateName(e.target.value)} />
                            </div>
                        </CCol>
                    </CRow>
                </CModalBody>
                <CModalFooter>
                    <CButton color="primary" disabled={cateName.length === 0} onClick={() => {
                        if (isSub)
                            saveSubCategory()
                        else
                            saveCategory()
                    }}>Save</CButton>{' '}
                    <CButton
                        color="secondary"
                        onClick={() => setModal(false)}
                    >Cancel</CButton>
                </CModalFooter>
            </CModal>

            <CModal
                show={modalRename}
                onClose={setModalRename}
            >
                <CModalHeader closeButton>
                    <CModalTitle>Rename category</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CRow>
                        <CCol xl='12' md='12'>
                            <div className='form-group'>
                                <label>Name</label>
                                <input type='text' className='form-control' value={cateNewName} onChange={(e) => setCateNewName(e.target.value)} />
                            </div>
                        </CCol>
                    </CRow>
                </CModalBody>
                <CModalFooter>
                    <CButton color="primary" disabled={cateNewName.length === 0} onClick={() => {
                        renameCategory()
                    }}>Save</CButton>{' '}
                    <CButton
                        color="secondary"
                        onClick={() => setModalRename(false)}
                    >Cancel</CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}

export default CategoryList

