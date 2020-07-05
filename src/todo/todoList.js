import React,{useState} from 'react';


const TodoList = (props)=>{
    const {todoList, updateTodo} = props;
     

    const deleteItem = (e, list, index)=>{
        updateTodo(index);
    };

     

    const list = todoList.map((list, index)=>{
        return (<li key={index}>
            <span className='todo-text'>{list}</span>
            <button className="edit">Edit</button>
            <button onClick={(e)=>deleteItem(e, list, index)} className="delete">Delete</button>
            </li>);
    })
   const ul = <ul className="my-todo"> 
   {list} </ul>  
   return ul;
}

export default TodoList;