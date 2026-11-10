import { useState, useEffect } from "react";
import "./TodoApp.css";

// salvar itens localStorage
// carregar eles com useEffect
// deletar itens com uma função e evento

const TodoApp = () => {
  // lista de tarefas
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // estado de texto da tarefa
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // adicionar tarefa
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);

      setInputValue("");
    }
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1 className="title">Lista de Tarefas</h1>
      {/* form para adicionar tarefas */}
      <form onSubmit={handleSubmit} className="form-container">
        <input
          className="input-field"
          type="text"
          placeholder="Adicione uma tarefa..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="add-button">
          Adcionar
        </button>
      </form>

      {/* lista de tarefas */}
      {todos.length === 0 && <p className="empty">Não há tarefas.</p>}

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {todo.text}
            <button
              className="delete-button"
              onClick={() => handleDelete(todo.id)}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
