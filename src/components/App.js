import './App.css';
import Todo from './TodoInput';
import Todolist from './TodoList';
import { getTasks } from './DataTasks'
import uniqid from 'uniqid';
import React, { useState, useEffect } from "react";

function App() {
  const [ tasks, setTasks ] = useState(getTasks())

  function handleToggle(taskId){
    let tasksList = [...tasks];
    tasksList.map(task => {
      if (task.id == taskId) {
        switch (task.status) {
          case 'done':
            task.status = 'todo';
            break;
          case 'todo':
            task.status = 'done'
          default:
            break;
        }
      }
    })
    setTasks(tasksList);
  }
  function addNewTask(name) {
    let newTask = {'id': uniqid(), 'name': name, 'status': 'todo'};
    let tasksList = [...tasks];
    tasksList = [...tasksList, newTask];
    setTasks(tasksList)
  }

  return (
    <><div className="App">
      <h1 className='text-3xl font-bold text-red-600'>To-do list</h1>
    </div><Todo addNewTask={addNewTask}/>
    <Todolist tasks={tasks} status={handleToggle} />
    </>
  );
}

export default App;
