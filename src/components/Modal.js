import './App.css';
import { FiX } from "react-icons/fi";
import React, { useState } from "react";

function Modal(props) {
    const [name, setName] = useState("");
    function handleChange(e) {
        setName(e.target.value);
    }
    function handleClick() {
        if (name != '') {
            props.taskToModify.name = name;
            props.changeTask(props.taskToModify);
            props.setModal(false);
            setName("");
        } else {
            props.setModal(false);
        }
    }
    return (
        <div className='modal'>
            <div className='modal-bcg' onClick={() => props.setModal(false)}></div>
                <div className='modal-input'>
                    <div className='mb-10'>
                    <div className='title'>
                    <h2> Change task</h2>
                    <FiX className='mr-2 ml-2 text-red-600 cursor-pointer' onClick={() => props.setModal(false)} />
                    </div>
                    <div className='addTask'>
                    <form className='ml-3 mb-2 mt-3 mr-3'>
                        <input className='border-solid border-2 border-sky-500 rounded-md w-full' type="text" id="input" name="name" required={name} placeholder={props.taskToModify.name} onChange={handleChange}></input>
                    </form>
                    <div className='modal-btn-actions'>
                        <button className='bg-red-800 text-white rounded-md ml-3 mr-3 mb-3 pl-3 pr-2'>Cancel</button>
                        <button className='bg-sky-800 text-white rounded-md ml-3 mr-3 mb-3 pl-3 pr-3' onClick={handleClick}>Add new task</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modal;