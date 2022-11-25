import React from 'react'
//import TaskItem from './TaskItem';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';


function TaskList({todos, setTodos, setEditTask}) {
   
 const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
        toast("Task has been deleted!")
 } 
 
 const handleEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id)
    setEditTask(findTodo)
   
 }
 
 
  return (
    <div>
       {
        todos.map((todo) => (
            <ul className='todo-list' key={todo.id}>
                <input type="text" className="list-item" value={todo.title} onChange={(e) => e.preventDefault()} >
                  
                </input>
                <div className='icons'>
                   
                  
                    <FaEdit onClick={() => handleEdit(todo)} />                    
                    <FaTrashAlt onClick={() => handleDelete(todo)} />
                    
                </div>
            </ul>
        ))
       }
    </div>
  )
}

export default TaskList