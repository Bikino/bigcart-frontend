import { CButton } from '@coreui/react'
import React from 'react'

const SubCateGoryList = (props) => {
    return (
        <div style={{ margin: '15px' }}>
            <ul className='list-group'>
                {
                    props.data ? props.data.map(c => (
                        <li className='list-group-item' key={c.id}>{c.name}</li>
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
                    <div className='col-md-6 col-xs-12' key={cate.id}>
                        <div key={cate.id} style={{ marginBottom: '5px' }}>
                            <h6 style={{ display: 'inline-block', marginRight: '15px' }}>{cate.name}</h6>
                            <CButton color='danger' size='sm'>Add sub category</CButton>
                        </div>
                        {
                            <SubCateGoryList data={cate.children} />
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryTable