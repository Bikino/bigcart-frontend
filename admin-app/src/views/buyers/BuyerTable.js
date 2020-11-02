import React from 'react'

const BuyerTable = (props) => {

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Registration Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((p) => (
                        <tr key={p.id}>
                            <td>{p.firstName}</td>
                            <td>{p.lastName}</td>
                            <td>{p.email}</td>
                            <td>{p.phone}</td>
                            <td>{new Date(p.dateOfBirth).toDateString()}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default BuyerTable