import React from 'react';

function ToDoList({todos, toggleTodo, deleteTodo}) {
    
    return (
        <ul className="list">
        {todos.length === 0 && <li>No items</li>}
        {/* whenever u return an array of elements, need key */}
        {todos.map((todo) => {
          return <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} 
              onChange={() => toggleTodo(todo.id)}/>
              {todo.title}
            </label>
            <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        })}
      </ul>
    )
}

export default ToDoList;