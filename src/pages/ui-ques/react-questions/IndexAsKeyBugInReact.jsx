import { useState } from 'react';

function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
      <span>{todo.text}</span>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Done' : 'Edit'}
      </button>
      {isEditing && <input defaultValue={todo.text} />}
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Learn Fiber' },
    { id: 3, text: 'Learn Hooks' },
  ]);

  const deleteFirst = () => {
    setTodos(todos.slice(1)); // Remove first item
  };

  return (
    <div style={{ margin: "auto", width: "300px" }}>
      <button onClick={deleteFirst}>Delete First Todo</button>
      <hr />

      {/* BUG: Using index as key */}
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </div>
  );
}

export default App;
