import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo() {
    // replace
    const todoValue = document.getElementById("todo-input").value;

    const newTodo = {
      title: todoValue,
      completed: false,
      id: Date.now(),
    };

    const updateArray = [...todos, newTodo];

    setTodos(updateArray);
  }

  function deleteTodo(id) {
    const updatedArray = todos.filter((todo) => {
      return todo.id != id;
    });

    setTodos(updatedArray);
  }

  return (
    <>
      <h1>Todo App</h1>

      <div className="todos-input-wrapper">
        <input type="text" id="todo-input" />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <div className="todos-wrapper">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="todo">
              <p>{todo.title}</p>
              <button>Mark as done</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App
