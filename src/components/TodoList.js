import './App.css';
import Tasks from './Tasks'
import React, { useState } from "react";


function TodoList(props) {
  const [ filter, setFilter ] = useState("todo")

  let tasks = props.tasks;
  function DisplayTodoTasks() {
    setFilter('todo')
  }

  function DisplayDoneTasks() {
    setFilter('done')
  }

  function DisplayAll() {
    setFilter('')
  }

  function Display(){
    if (filter === '') {
      return (
        <ul>
          {tasks.map((task) => (
                <Tasks task={task} status={props.status}/>
            ))}
        </ul>
      )
    }
    else {
      return (
        <ul>
          {tasks.filter(task => task.status === filter).map((task) => (
                <Tasks task={task} status={props.status}/>
            ))}
        </ul>
      )
    }
  }
  return (
    <div className='todo-list'>
      <h2> Todo List</h2>
      <div className='grid grid-cols-3 gap-3 mt-3'>
        <button onClick={DisplayAll} className='bg-sky-800 text-white rounded-md w-32'>All</button>
        <button onClick={DisplayDoneTasks} className='bg-sky-800 text-white rounded-md w-32'>Done</button>
        <button onClick={DisplayTodoTasks} className='bg-sky-800 text-white rounded-md w-32'>Todo</button>
      </div>
      <Display />
    </div>
  );
}

export default TodoList;
