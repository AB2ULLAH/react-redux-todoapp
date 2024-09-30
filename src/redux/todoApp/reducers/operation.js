import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "../action";
import { DELETE_ALL } from "../action";

const initialState = [
  { id: 1, todo: "Buy Laptop", completed: false },
  { id: 2, todo: "Master Redux", completed: false },
  { id: 3, todo: "Watering Plants", completed: false },
];

export const operationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_ALL:
      return [];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case UPDATE_TODO:
      let data = action.payload;
      const upadteArray = [];
      state.map((items) =>{
        if (items.id === data.id) {
          items.id = data.id;
          items.todo = data.todo;
          items.completed = data.completed;
        }
        upadteArray.push(items);
      })
      return upadteArray;

    default:
      return state;
  }
};
