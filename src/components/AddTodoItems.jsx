import React, { useState } from "react";
import TodoListItems from "./TodoListItems";
const AddTodoItems = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addTodo = () => {
    if (todo !== "") {
      setTodoList([...todoList, { text: todo }]);
      setTodo("");
    }
  };
  const handleDelete = (index) => {
    const updatedTodos = [...todoList];
    updatedTodos.splice(index, 1);
    setTodoList(updatedTodos);
  };
  return (
    <>
      <div className="add-todo-cointainer">
        <div className="row m-5">
          <div className="col">
            <input
              placeholder="Enter Todo Here"
              type="text"
              id="todo-item"
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <button className="btn btn-success" onClick={addTodo}>
              ADD
            </button>
          </div>
        </div>
      </div>
      <TodoListItems todos={todoList} onDelete={handleDelete} />
    </>
  );
};

export default AddTodoItems;
