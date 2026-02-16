import React, { createContext, useEffect, useMemo, useState } from "react";

export const TodosContext = createContext(null);

const STORAGE_KEY = "todos_v1";

export function TodosProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    if (!title.trim()) return;

    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const filteredTodos = useMemo(() => {
    if (filter === "active") return todos.filter((t) => !t.completed);
    if (filter === "completed") return todos.filter((t) => t.completed);
    return todos;
  }, [todos, filter]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        filteredTodos,
        addTodo,
        deleteTodo,
        toggleTodo,
        filter,
        setFilter,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
