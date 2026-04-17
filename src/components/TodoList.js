import React from 'react';
import TodoItem from './TodoItem';
import '../App.css'; // Import App.css for styling

function TodoList({ todos, deleteTodo, toggleComplete }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="no-todos">No todos yet! Add some above.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;
