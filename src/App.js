import './App.css';
import React from 'react';
import Header from './Components/Header';
import AddTask from './Components/AddTask';
import Title from './Components/Title';
import TaskList from './Components/TaskList';

import "react-toastify/dist/ReactToastify.css";


function App() {
  
return (
    <div className="app-container">
      <Title/>
      <Header/>
      <AddTask/>
      <TaskList/>
    </div>
  );
}

export default App;
