import './App.css';
import Tasks from './Tasks'

function TodoList(props) {
  let tasks = props.tasks;

  return (
    <div className='todo-list'>
      <h2> Todo List</h2>
      <div className='grid grid-cols-3 gap-3 mt-3'>
        <button className='bg-sky-800 text-white rounded-md w-32'>All</button>
        <button onClick={props.DisplayDoneTasks} className='bg-sky-800 text-white rounded-md w-32'>Done</button>
        <button onClick={props.DisplayTodoTasks} className='bg-sky-800 text-white rounded-md w-32'>Todo</button>
      </div>
      <ul>
            {tasks.map((task) => (
                <Tasks task={task} status={props.status}/>
            ))}
      </ul>
    </div>
  );
}

export default TodoList;
