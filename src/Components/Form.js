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
        setTask(e.target.value);
    }

    const listOfTasks = submittedData.map((data, index) => {
        return (
            <div key={index}>
                {data.task}
            </div>
        );
    });

    return (
        <div className="input">
            <form onSubmit={onSubmit}>
                <label><b>Enter Task:</b></label>
                <input type = "text" value={task} onChange={onChange}></input>
                <button type="submit"><b>ADD TASK</b></button>
            </form>
            <section className="tasklist">
            <h2>Tasks to do today</h2>
            
            {listOfTasks}
            <button><b>EDIT TASK</b></button>
            <button><b>DONE !</b></button>
            
            
            </section>
        </div>
    )
}

export default Form;