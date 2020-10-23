import { CButton } from '@coreui/react'
import React from 'react'

const SubCateGoryList = (props) => {
    return (
        <div style={{ margin: '15px' }}>
            <ul className='list-group'>
                {
                    props.data ? props.data.map(c => (
                        <li className='list-group-item' key={c.id}>
                            {c.name}
                            <CButton className='float-right' color='primary' size='sm'
                                onClick={() => props.renameCategory(c.name, { cateId: c.id, parentId: c.parentId })}>Rename</CButton>
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
                    <div className='col-lg-4 col-md-6 col-xs-12' key={cate.id}>
                        <div key={cate.id} style={{ marginBottom: '5px' }}>
                            <h6 style={{ display: 'inline-block', marginRight: '15px' }}>{cate.name}</h6>
                            <CButton color='warning'
                                style={{ marginRight: '5px' }} size='sm'
                                onClick={() => props.renameCategory(cate.name, { cateId: cate.id, parentId: cate.parentId })}>
                                Rename</CButton>
                            <CButton color='danger' size='sm' onClick={() => props.addSubCate(cate.name, cate.id)}>Add sub category</CButton>
                        </div>
                        {
                            <SubCateGoryList data={cate.children} renameCategory={props.renameCategory} />
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryTable