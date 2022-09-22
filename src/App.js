import './App.css';
import Form from './Components/Form';
import React from 'react';

function App() {
  
return (
    <div className="App">
      <header className="App-header">
        <h1><b>TO-DO LIST</b></h1>
        <h2><b>Plan your day!</b></h2>
      </header>
      <Form/>
      <div className='content'>

      </div>
    </div>
  );
}

export default App;
