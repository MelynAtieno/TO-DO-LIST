import React, { useState } from "react";


function Form() {
    const [task, setTask] = useState("")
    const [submittedData, setsubmittedData] = useState([])

    const onSubmit = e => {
        e.preventDefault();
        const addTask = {
            task:task
        };
        const taskList = [...submittedData, addTask];
        setsubmittedData(taskList);
        setTask("");
    }

    const onChange = (e) => {
        e.preventDefault();
        setTask(e.target.value);
    }

    const listOfTasks = submittedData.map((data, index) => {
        return (
            <div> 
                <li className="list-item" key={index}>
                <input value={data.task} />
                <div>
                <button className="done-task">
                <i className='fa fa-edit'></i>
                </button>
                
                <button className="edit-task">
                    <i className='fa fa-edit'></i>
                </button>

                <button className="delete-task">
                <i className='fa fa-trash'></i>
                </button>
                </div>
                </li>
            </div>
        );
    });

    return (
        <div className="input">
            <form onSubmit={onSubmit}>
                <label><b>Enter Task:</b></label>
                <input type = "text" value={task} onChange={onChange} required></input>
                <button className="add-task" type="submit"><b>ADD TASK</b></button>
            </form>
            <section className="tasklist">
            <h2>Tasks to do today</h2>
            <div className="tasks">
            {listOfTasks}
           
            </div>
            
            
            </section>
        </div>
    )
}

export default Form;