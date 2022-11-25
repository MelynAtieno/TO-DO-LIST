import React from 'react'
//import TaskItem from './TaskItem';


function TaskList({todos, setTodos}) {
   
    

  return (
    <div>
       {
        todos.map((todo) => (
            <ul className='todo-list' key={todo.id}>
                <input type="text" className='list-item' value={todo.title} onChange={(e) => e.preventDefault()} >
                  
                </input>
                <div>
                    <button className='btn-complete'></button>
                    <button className='btn-edit'><i></i></button>
                    <button className='btn-delete'><i></i></button>
                </div>
            </ul>
        ))
       }
    </div>
  )
}

export default TaskList