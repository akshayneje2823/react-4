import React from 'react'

function Form(props) {
  return (
    <>
        <input type="text"
         value={props.inputText}
         onChange={props.changeHandler}
         />

        <button onClick={props.todoHandler}>
          <span>Add</span>
        </button>
      </>
  )
}

export default Form