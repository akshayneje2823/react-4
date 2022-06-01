import React,{useState} from 'react';
import "./App.css";
import Table from './Filter/Table form/Table';

function App() {
  const [Quary, setQuary] = useState("")
  return (
    <div className='app'>
      <input
      className='search'
      placeholder="Search..."
      onChange={(e)=>setQuary(e.target.value)}
      />
      {<Table data={[]}/>}
    </div>
  )
}

export default App