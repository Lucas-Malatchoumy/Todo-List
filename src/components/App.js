import './App.css';
import Todo from './TodoInput';
import Todolist from './TodoList';
import { getTasks } from './DataTasks'
import uniqid from 'uniqid';
import React, { useState } from "react";
import Modal from './Modal';

function App() {
  const [ tasks, setTasks ] = useState(getTasks())
  const [ modal, setModal ] = useState(false);
  const [ taskToModify, setTaskToModify ] = useState();
  console.log(tasks);

  function toggleModal(task) {
    setTaskToModify(task);
    setModal(true);
  }

  function changeTask(task) {
    return task;
  }
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

  function removeTask(task) {
    let tasksList = [...tasks];
    tasksList.shift(task);
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
    <Todolist tasks={tasks} status={handleToggle} toggleModal={toggleModal} removeTask={removeTask} />
    {modal && <Modal setModal={setModal} changeTask={changeTask} taskToModify={taskToModify} />}
    </>
  );
}

export default App;
