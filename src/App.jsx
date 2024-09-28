import React, { useEffect } from 'react';
import { useState } from 'react';
import './styles.css'
import NewTodoForm from './NewTodoForm';
import ToDoList from './ToDoList';
import SearchBar from './SearchBar';

function App() {
  // everytime you change state it re-
  // renders the component
  const [todos, setTodos] = useState(() => {
    const localItem = localStorage.getItem("ITEMS");
    return localItem ? JSON.parse(localItem) : [];
  });
  const [search, setSearch] = useState("");

  function addTodo (title) {
    console.log("made it here");
    setTodos(prevTodos => [...prevTodos, {title, id: crypto.randomUUID(), completed: false}]);
  }

  function toggleTodo(id) { 
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    )
  }

  function deleteTodo(id) {
    setTodos(
      todos.filter(todo => {
        return todo.id !== id
      })
    )
  }   

  const filteredTodos = todos.filter(todo => {
    return todo.title.toLowerCase().includes(search.toLowerCase());
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos])

  return (
    <React.Fragment>
      <NewTodoForm onSubmit={addTodo}/>
      <SearchBar search={search} setSearch={setSearch}/>
      <h1 className="header" >Todo List</h1>
      <ToDoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </React.Fragment>
  )
}

export default App;