
import React, {useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {v4 as uuid} from 'uuid';


function AddTask({task, setTask, todos, setTodos, editTask, setEditTask}) {
    
    const updateTask = (title, id) =>{
      const newTask = todos.map((todo) => 
        todo.id === id ? {title, id} : todo 
      )
      setTodos(newTask);
      toast("Task updated successfully!")
      setEditTask("")

    };

    useEffect(() => {
      if(editTask){
        setTask(editTask.title)
      } else {
        setTask("")
      }
    }, [setTask, editTask])


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!editTask){
        setTodos([...todos,{id: uuid(),title:task}])
        toast("Task added successfully!")
        setTask('');
        } else {
          updateTask(task, editTask.id)
        }
    }

    return (
    <div className='form'>
        <form className='add-task' onSubmit={(e)=> handleSubmit(e)}>
            
            <input 
            placeholder='What are you doing today?'
             type="text" 
             id="task"
             required  
             value={task}
             onChange={(e) => setTask(e.target.value)}>
             
             </input>
            

            <button className='btn-add' type='submit'><b>{editTask ? "UPDATE TASK" :"ADD TASK"}</b></button>
        </form>
        <ToastContainer />
    </div>
  )
}

export default AddTask