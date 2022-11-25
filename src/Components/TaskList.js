import React from 'react'
//import TaskItem from './TaskItem';
import { FaCheckCircle, FaEdit, FaTrashAlt } from 'react-icons/fa';
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

 const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if(item.id === todo.id){
          return {...item, completed: !item.completed}
        }
        return item;
      })
    )
 }

 
  return (
    <div>
       {
        todos.map((todo) => (
            <ul className='todo-list' key={todo.id}>
                <tag type="text" className={`list-item ${todo.completed ? "complete" : ""}`} value={todo.title} onChange={(e) => e.preventDefault()} >
                  
                </tag>
                <div className='icons'>
            
                    
                    <FaCheckCircle onClick={() => handleComplete(todo)} />
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