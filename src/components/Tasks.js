import './App.css';
import { FiEdit2 } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

function Todo(props) {
    function handleClick(){
        props.status(props.task.id)
    }
    //console.log(props.task.status);
    return (
            <li className='task mt-2 mb-2 pb-2 pt-2 pl-2 border-solid border-2 border-grey-500 w-full' key={props.task.id} id={props.task.id}> 
                <span className={props.task.status}>{props.task.name}</span>
                <div className='actions'>
                <input className='mr-2 ml-2' type="checkbox" id="input" name="name" onChange={handleClick}></input>
                <FiEdit2 className='mr-2 ml-2 text-amber-400' />
                <FiTrash2 className='mr-2 ml-2 text-red-600'/>
                </div>
            </li>
    );
    
}

export default Todo;
