import { CButton } from '@coreui/react'
import React from 'react'

const SubCateGoryList = (props) => {
    return (
        <div style={{ margin: '15px' }}>
            <ul className='list-group'>
                {
                    (props.data && props.data.length > 0) ? props.data.map(c => (
                        <li className='list-group-item' key={c.categoryId}>
                            {c.name}
                            <div className='float-right'>
                                <CButton color='primary' size='sm' className="mr-2"
                                    onClick={() => props.renameCategory(c.name, { categoryId: c.categoryId, parentCategoryId: c.parentCategoryId })}>Rename</CButton>
                                <CButton color='danger' size='sm' onClick={() => { props.deleteCategory(c.categoryId) }}>Delete</CButton>
                            </div>
                        </li>
                    )) : <li className='list-group-item' >No sub categories</li>
                }
            </ul>
        </div>
    )
}

const CategoryTable = (props) => {
    return (
        <div className='row'>
            {
                props.data.map(cate => (
                    <div className='col-lg-4 col-md-6 col-xs-12' key={cate.categoryId}>
                        <div key={cate.categoryId} style={{ marginBottom: '5px' }}>
                            <h6 style={{ display: 'inline-block', marginRight: '15px' }}>{cate.name}</h6>
                            <CButton color='primary' className="mr-2" size='sm'
                                onClick={() => props.renameCategory(cate.name, { categoryId: cate.categoryId })}>
                                Rename</CButton>

                            <CButton color='warning' size='sm' className="mr-2"
                                onClick={() => props.addSubCate(cate.name, cate.categoryId)}>
                                Add sub category</CButton>
                            <CButton color='danger' size='sm' onClick={() => { props.deleteCategory(cate.categoryId) }}>
                                Delete</CButton>
                        </div>
                        {
                            <SubCateGoryList data={cate.children}
                                renameCategory={props.renameCategory}
                                deleteCategory={props.deleteCategory} />
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryTable