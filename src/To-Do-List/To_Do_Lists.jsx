import React from 'react'

function To_Do_Lists(props) {
  return (
    <div className='todo-style'>
        <i className='fa fa-times'/>
        {
         props.toDo.map(newTodo=><li>{newTodo}</li>
         )
        }
        
    </div>
  )
}

export default To_Do_Lists