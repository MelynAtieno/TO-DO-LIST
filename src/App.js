import './App.css';

import React from 'react';
import Header from './Components/Header';
import AddTask from './Components/AddTask';

function App() {
  
return (
    <div className="app-container">
      <Header></Header>
      <AddTask></AddTask>
    </div>
  );
}

export default App;
