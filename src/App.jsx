import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import ToDoList from './ToDolist';
import { useDispatch, useSelector} from 'react-redux';
import { addItem,removeItem } from './store/userSlices';


const App = () => {   
    const[todo,setTodo]=useState("");
    const dispatch=useDispatch();
    const users = useSelector(state => state.users);
    const handleChange=(event)=>{
        setTodo(event.target.value);
    }
    const handleClick = () => {
      // Dispatch the addItem action with the new item
      dispatch(addItem(todo));
      // Clear the input field
      setTodo("");
    }
    const handleDelete = (itemToDelete) => {
      // Dispatch the removeItem action with the item to delete
      dispatch(removeItem(itemToDelete));
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
                            {users.map((item,index) => (
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
