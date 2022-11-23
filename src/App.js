import './App.css';

import React from 'react';
import Header from './Components/Header';
import AddTask from './Components/AddTask';
import Title from './Components/Title';

function App() {
  
return (
    <div className="app-container">
      <Title></Title>
      <Header></Header>
      <AddTask></AddTask>
    </div>
  );
}

export default App;
