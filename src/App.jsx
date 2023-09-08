import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import ToDoList from './ToDoList';


const App = () => {   
    const[todo,setTodo]=useState("");
    const[list,setList]=useState([]);
    const handleChange=(event)=>{
        setTodo(event.target.value);
    }
    const handleClick = () => {
        // Add the new item to the list
        setList([...list, todo]);
        // Clear the input field
        setTodo("");
    }
    const handleDelete=(itemToDelete)=>{
        const updatedList = list.filter(item => item !== itemToDelete);
        setList(updatedList);
    }
    return(
  <>
    <div className="card">
        <h5 className="card-title">To Do List</h5>
        <div className="card-body">
            <input onChange={handleChange} type="text" placeholder="Enter item to add" name='item' value={todo} className="custom-input" aria-describedby="emailHelp"/>
            <button onClick={handleClick} className="rounded-button"><span style={{color:'white'}}>+</span></button>
            <div className='list'>
            <ol>
                            {list.map((item,index) => (
                                <ToDoList text={item} key={index} onDelete={()=>
                                handleDelete(item)}/>
                            ))}
            </ol>
        </div>
        </div> 
    </div>
  </>
  )
};

export default App;
