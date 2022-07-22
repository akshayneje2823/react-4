import React,{useState} from 'react';
import To_Do_Lists from './To_Do_Lists';
import Form from './Form';


function App() {

  const [inputText, setinputText] = useState("");
  const [toDo,setToDO] = useState([])

  const changeHandler = (event) => {
    setinputText(event.target.value);
  }

  const todoHandler = () =>{
    setToDO(lastVal =>[...lastVal,inputText]);
    setinputText('')
  }

  return (
    <div className='container'>
      <div className="heading">
        <h1>To Do List</h1>
      </div>

      <div className="form">

        <Form
        inputText={inputText}
        changeHandler={changeHandler} 
        todoHandler={todoHandler} 
        />
      </div>
      <ul>
      <To_Do_Lists toDo={toDo}/> 
        </ul> 
    </div> 
  )
}

export default App