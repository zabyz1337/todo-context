import { TodosProvider } from "./context/TodosContext";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import TodoList from "./components/TodoList/TodoList";
import FilterBar from "./components/FilterBar/FilterBar";

function App() {
  return (
    <TodosProvider>
      <h1>Todo App</h1>
      <AddTodoForm />
      <FilterBar />
      <TodoList />
    </TodosProvider>
  );
}

export default App;
