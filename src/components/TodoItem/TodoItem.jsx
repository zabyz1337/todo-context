import React, { useContext } from "react";
import { TodosContext } from "../../context/TodosContext";

export default function TodoItem({ todo }) {
  const { deleteTodo, toggleTodo } = useContext(TodosContext);

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.title}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </li>
  );
}
