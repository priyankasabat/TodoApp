import React from "react";

const TodoListItems = ({ todos, onDelete }) => {
  const handleDelete = (index) => {
    onDelete(index);
  };
  return (
    <ul className="todo-list-cointainer">
      {todos.map((todo, index) => {
        return (
          <div className="row  m-5">
            <li key={index} className="col">
              {todo.text}
            </li>
            <div className="col">
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </ul>
  );
};

export default TodoListItems;
