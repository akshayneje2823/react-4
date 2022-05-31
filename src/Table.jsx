import React from 'react';


function Table({ data }) {
  return (
    <table class="table table-hover mt-4">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
          {
            data.map((item)=>(
              <tr key={data.id}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td></td>
              <td></td>
            </tr>
            ))
          }
      </tbody>
    </table>
  )
}

export default Table


