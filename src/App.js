
import './App.css';
import Form from './Components/Form';

function App() {
  const addTask = task =>{
    task.id = tasks.length + 1
    setTasks([...tasks, task])
  }


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
