
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import {v4 as uuid} from 'uuid';


function AddTask() {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({id: uuid(),task})
       
    }

    const notify = ()=>{
        toast("Task added successfully!");
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
            

            <button className='btn-add' type='submit' onClick={notify}><b>ADD TASK</b></button>
        </form>
        <ToastContainer />
    </div>
  )
}

export default AddTask