
import './App.css';
import React, {useState} from 'react';
import TodoForm from './components/TodoForm'  
import TodoList from './components/TodoList';
import DanielLogo from './Daniel-Balloi.png'



function App() {
  return (
    <div className="todo-app">
      <img src={DanielLogo} className='daniel-logo'></img>
      <h1>Todo App</h1>
       <TodoList/>
    </div>
  );
}

export default App;
