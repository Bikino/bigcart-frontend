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
                            <td>{p.companyName}</td>
                            <td>{p.phone}</td>
                            <td>{p.email}</td>
                            <td>{new Date(p.registrationDate).toDateString()}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default VendorTable