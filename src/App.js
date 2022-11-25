import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import AddTask from './Components/AddTask';
import Title from './Components/Title';
import TaskList from './Components/TaskList';

import "react-toastify/dist/ReactToastify.css";


function App() {
  //const initialState = JSON.parse(localStorage.getItem("todos")) || [];
   const[task, setTask] = useState("");
   const [todos, setTodos]= useState([]);
   const [editTask, setEditTask] = useState(null);

 if(!localStorage.getItem("todos") || JSON.parse(localStorage.getItem("todos")).length === 0){
  localStorage.setItem("todos", JSON.stringify(todos));
 }
   

return (
    <div className="app-container">
      <Title/>
      <Header/>
      <AddTask
        task={task}
        setTask={setTask}
        todos={todos}
        setTodos={setTodos}
        editTask={editTask}
        setEditTask={setEditTask}
      />
      <TaskList
      todos={todos}
      setTodos={setTodos}
      setEditTask={setEditTask}
      /> 
    </div>
  );
}

export default App;
