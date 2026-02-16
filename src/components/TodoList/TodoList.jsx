import React, { useContext } from "react";
import { TodosContext } from "../../context/TodosContext";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList() {
  const { filteredTodos } = useContext(TodosContext);

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
