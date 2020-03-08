import React from 'react';
import TodoApp from './TodoApp';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <TodoApp />
    </div>
  );
}

export default App;


// App
//   -Navbar
//   -TodoApp 
//     -TodoForm
//     -TodoList
//       -TodoItem
    
