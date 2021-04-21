import React, { useState, useReducer } from "react";
import "./App.css";
import { initialState, reducer } from "./reducers/reducer.js";
import AddTodo from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { WiredCard, WiredDivider } from "react-wired-elements";

function App() {
  const [currentTodo, setCurrentTodo] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChanges = (evt) => {
    setCurrentTodo(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({ type: "ADD_TODO", payload: currentTodo });
    setCurrentTodo("");
  };

  const toggleTask = (todoId) => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: todoId });
  };

  const clearCompleted = (evt) => {
    evt.preventDefault();
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  console.log("app", state);

  return (
    <div className="App">
      <WiredCard fill="aliceblue" elevation="5">
        <h1>To Do List</h1>

        <AddTodo
          handleChanges={handleChanges}
          handleSubmit={handleSubmit}
          currentTodo={currentTodo}
          clearCompleted={clearCompleted}
        />
        <WiredDivider />
        <TodoList todos={state} toggleTask={toggleTask} />
      </WiredCard>
    </div>
  );
}

export default App;
