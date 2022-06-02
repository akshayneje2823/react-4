import React, { useState } from 'react'
import './App.css'
import Table from './Table';
import { Users } from './users';


function App() {

  // Input Field
  const [query, setQuery] = useState("");

  //    Filter Data
  const search = (data) => {
    return data.filter((item) =>
      item.first_name.toLowerCase().includes(query))
  }

  // console.log(Users.filter(user => user.first_name.toLowerCase().includes("fe")));
  return (
    <div className='app'>
      <input type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)} />
      <Table data={search(Users)} />
    </div>
  )
}

export default App