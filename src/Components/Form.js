import React from "react";

function Form(){
    const [task, setTask] = useState("")

    const onSubmit = e => {
        e.preventDefault();

    }

    const onChange = (e) => {
        setTask(e.target.value);
      }

    return(
        <div className="input">
            <form onSubmit={onSubmit}>
                <label><b>Enter Task:</b></label>
                <input value={task} onChange={onChange}></input>
                <button type="submit"><b>ADD</b></button>
            </form>
        </div>
    )
}

export default Form;