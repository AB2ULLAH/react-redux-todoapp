import { combineReducers } from "redux";
import { operationReducer } from "./todoApp/reducers/operation";

export const rootReducer = combineReducers({
  operationReducer,
});
