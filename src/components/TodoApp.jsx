import React from "react";
import AddTodoItems from "./AddTodoItems";
import TodoTitle from "./TodoTitle";

const TodoApp = () => {
  return (
    <div className="todo-cointainer text-center">
      <TodoTitle />
      <AddTodoItems />
    </div>
  );
};

export default TodoApp;
