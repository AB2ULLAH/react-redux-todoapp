import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "react-icons-kit";
import { trash } from "react-icons-kit/feather/trash";
import { edit2 } from "react-icons-kit/feather/edit2";
import { removetodo } from "../redux/todoApp/action";

export const Todos = ({ handleEdit, editFormVisibility }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationReducer);

  return todos.map((todo) => (
    <div key={todo.id} className="todo-box">
      <div className="content">
        <p
          style={
            todo.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {todo.todo}
        </p>
      </div>
      {editFormVisibility === false && (
        <div className="actions-box">
          <span>
            <Icon icon={edit2} onClick={() => handleEdit(todo)} />
          </span>
          <span>
            <Icon icon={trash} onClick={() => dispatch(removetodo(todo.id))} />
          </span>
        </div>
      )}
    </div>
  ));
};
