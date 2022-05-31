import React, { useState } from 'react';
import './App.css';
import { Users } from './users';


function Normal() {
  const [query, setQuery] = useState("");

  // console.log(Users.filter(user => user.first_name.toLowerCase().includes("fe")));
  return (
    <div className='app'>
      <input type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)} />
      <ul className='list'>
        {Users.filter(user=>user.first_name.toLowerCase().includes(query)).map((data) => (
          <li className='listitem'
            key={data.id}>
            {data.first_name}
          </li>
        ))}

      </ul>
    </div>
  )
}

export default Normal