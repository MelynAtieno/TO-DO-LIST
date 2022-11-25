import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header';
import AddTask from './Components/AddTask';
import Title from './Components/Title';
import TaskList from './Components/TaskList';

import "react-toastify/dist/ReactToastify.css";


function App() {
   const[task, setTask] = useState("")
   const [todos, setTodos]= useState([])

return (
    <div className="app-container">
      <Title/>
      <Header/>
      <AddTask
        task={task}
        setTask={setTask}
        todos={todos}
        setTodos={setTodos}
      />
      <TaskList
      todos={todos}
      setTodos={setTodos}
      /> 
    </div>
  );
}

export default App;
