import React, { useState } from 'react'

const SearchBar = (props) => {

    const [categoryId, setCategoryId] = useState(0)
    const [vendorId, setVendorId] = useState(0)
    const [status, setStatus] = useState('approved')
    //const [productName, setProductName] = useState('')

    const searchProducts = () => {
        props.searchProducts(status, parseInt(categoryId), parseInt(vendorId), '')
    }

    return (
        <div className='form-inline'>
            <div className='form-group mr-2 mb-2'>
                <select className='form-control' onChange={(evt) => {
                    setCategoryId(evt.target.value)
                }}>
                    <option value={0}>All categories</option>
                    {
                        props.categories.map((c) => <option key={c.name} value={c.categoryId}>{c.name}</option>)
                    }
                </select>
            </div>
            <div className='form-group mr-2 mb-2'>
                <select className='form-control' onChange={(evt) => {
                    setVendorId(evt.target.value)
                }}>
                    <option>All vendors</option>
                    {
                        props.vendors.map(c => <option key={c.id} value={c.id}>{c.name}</option>)
                    }
                </select>
            </div>
            {
                props.showStatusDropdown ? (
                    <div className='form-group mr-2 mb-2'>
                        <select className='form-control' defaultValue={status} onChange={(evt) => setStatus(evt.target.value)}>
                            <option value='approved'>Approved</option>
                            <option value='declined'>Declined</option>
                        </select>
                    </div>) : null
            }

            {/* <div className='form-group mr-2 mb-2'>
                <input type='text' className="form-control" placeholder="Product name" onChange={(evt) => setProductName(evt.target.value)} />
            </div> */}
            <div className='form-group mb-2'>
                <button className="btn btn-primary" onClick={searchProducts}>Search</button>
            </div>
        </div>
    )
}

export default SearchBar