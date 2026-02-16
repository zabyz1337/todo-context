import React, { useContext, useState } from "react";
import { TodosContext } from "../../context/TodosContext";

export default function AddTodoForm() {
  const { addTodo } = useContext(TodosContext);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
