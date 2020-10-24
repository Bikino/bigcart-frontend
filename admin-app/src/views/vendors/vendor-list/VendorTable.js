import React from 'react'

const VendorTable = (props) => {

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Date Posted</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((p) => (
                        <tr key={p.id}>
                            <td>{p.name}</td>
                            <td>{p.phone}</td>
                            <td>{p.email}</td>
                            <td>10/21/2020</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default VendorTable