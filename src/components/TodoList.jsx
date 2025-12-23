// components/TodoList.jsx
import React, { useState } from 'react';

const TodoList = ({ user, setUser }) => {
  const [task, setTask] = useState('');

  const addTask = () => {
    const updated = { ...user, todos: [...user.todos, { task, done: false }] };
    localStorage.setItem('currentUser', JSON.stringify(updated));
    setUser(updated);
    setTask('');
  };

  const toggleTask = (index) => {
    const updatedTodos = user.todos.map((t, i) =>
      i === index ? { ...t, done: !t.done } : t
    );
    const updated = { ...user, todos: updatedTodos };
    localStorage.setItem('currentUser', JSON.stringify(updated));
    setUser(updated);
  };

  return (
    <div>
      <h4>Tasks</h4>
      <input value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {user.todos.map((t, i) => (
          <li key={i} onClick={() => toggleTask(i)} style={{ textDecoration: t.done ? 'line-through' : 'none' }}>
            {t.task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
