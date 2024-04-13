import React from "react";
import Todos from "./components/Todo";
import "./App.css";
import Todo from "./models/todo";
function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
