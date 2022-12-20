import "./TaskList.css"
import { FaCheckCircle, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';



function TaskList({todos, setTodos, setEditTask}) {
   
 

 const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
        toast("Task has been deleted!")
 } 
 
 const handleEdit = ({id}) => {
    const findTodo = todos.find((todo) => todo.id === id)
    setEditTask(findTodo)
   
 }

 const handleComplete = ({id}) => {
    let completeTodo = todos.map((todo) => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    setTodos(completeTodo)
 }

 
  return (
    <div className='task-list'>
      
       {
        todos.map((todo) => (
            <ul className='todo-list' key={todo.id}>
              
                <p type="text" className={`list-item ${todo.completed ? "complete" : ""}`}  onChange={(e) => e.preventDefault()} >
                  
                   {todo.title}

                    <span className="icons">
                    <FaCheckCircle onClick={() => handleComplete(todo)} /> 
                    <FaEdit onClick={() => handleEdit(todo)} />                   
                    <FaTrashAlt onClick={() => handleDelete(todo)} /> 
                    </span>
                   
                
                </p>
                
                
            </ul>
             
        ))
       }
       
    </div>
  )
}

export default TaskList