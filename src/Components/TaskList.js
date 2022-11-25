import React from 'react'
//import TaskItem from './TaskItem';
import { FaCheckCircle, FaEdit, FaTrashAlt } from 'react-icons/fa';


function TaskList({todos, setTodos}) {
   
    

  return (
    <div>
       {
        todos.map((todo) => (
            <ul className='todo-list' key={todo.id}>
                <input type="text" className='list-item' value={todo.title} onChange={(e) => e.preventDefault()} >
                  
                </input>
                <div className='icons'>
                    <button className='btn-complete'>
                    <FaCheckCircle />
                    </button>
                    <button className='btn-edit'>
                      <FaEdit />
                    </button>
                    <button className='btn-delete'>
                      <FaTrashAlt />
                    </button>
                </div>
            </ul>
        ))
       }
    </div>
  )
}

export default TaskList