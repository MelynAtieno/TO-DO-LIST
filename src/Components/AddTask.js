import React from 'react'

function AddTask() {
  return (
    <div className='form'>
        <form className='add-task'>
            
            <input placeholder='What are you doing today?'></input>

            <button className='btn-add'><b>ADD TASK</b></button>
        </form>
    </div>
  )
}

export default AddTask