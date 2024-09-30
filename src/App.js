import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "./component/Form";
import { Todos } from "./component/todos";
import { deleteAll } from "./redux/todoApp/action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.operationReducer);
  const [editFormVisibility, setEditFormVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState("");

  // Defining handleEdit
  const handleEdit = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  };

  const cancelUpdate = () => {
    setEditFormVisibility(false);
  };
  return (
    <div className="wrapper text-center">
      <h1>Todo App with React-Redux</h1>
      <Form
        editFormVisibility={editFormVisibility}
        editTodo={editTodo}
        cancelUpdate={cancelUpdate}
      />
      <Todos handleEdit={handleEdit} editFormVisibility={editFormVisibility} />
      {todos.length > 1 && (
        <button
          className="btn btn-danger btn-md delete-all"
          onClick={() => dispatch(deleteAll())}
        >
          DELETE ALL
        </button>
      )}
    </div>
  );
}

export default App;
