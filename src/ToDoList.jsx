import React from "react";
import './index.css';

const deleteItem=()=>{
    console.log('item deleted');
}

const ToDoList = (props) => {
    return (
        <div className="todolist">
            <div className="box">
                <i  onClick={props.onDelete} className="fas fa-times"></i>
            </div>
            <li>{props.text}</li>
        </div>
    );
}

export default ToDoList;
