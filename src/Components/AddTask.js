import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {v4 as uuid} from 'uuid';


function AddTask({task, setTask, todos, setTodos}) {
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos,{id: uuid(),title:task}])
        
        toast("Task added successfully!")


        setTask('');
    }

    // const notify = (e)=>{
    //     e.preventDefault();
    //     toast("Task added successfully!");
    // }

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
            

            <button className='btn-add' type='submit'><b>ADD TASK</b></button>
        </form>
        <ToastContainer />
    </div>
  )
}

export default AddTask