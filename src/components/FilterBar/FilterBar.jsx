import React, { useContext } from "react";
import { TodosContext } from "../../context/TodosContext";

export default function FilterBar() {
  const { filter, setFilter } = useContext(TodosContext);

  return (
    <div>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>
  );
}
