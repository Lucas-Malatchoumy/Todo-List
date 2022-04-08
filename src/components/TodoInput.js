import './App.css';
import React, { useState } from "react";

function Todo(props) {
    const [name, setName] = useState("");
    function handleChange(e) {
        setName(e.target.value);
    }
    function handleClick() {
        props.addNewTask(name)
        setName("");
    }
  return (
    <div className='todo-input mb-10'>
      <h2> Todo Input</h2>
      <div className='addTask border-solid border-2 border-sky-500'>
      <form className='ml-3 mb-2 mt-3 mr-3'>
        <input className='border-solid border-2 border-sky-500 rounded-md w-full' type="text" id="input" name="name" placeholder='New task' required value={name} onChange={handleChange}></input>
      </form>
      <button className='bg-sky-800 text-white rounded-md ml-3 mr-3 mb-3' onClick={handleClick}> Add new task</button>
    </div>
    </div>
  );
}

export default Todo;
