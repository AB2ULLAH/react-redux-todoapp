export const ADD_TODO = "ADD_TODO";
export const DELETE_ALL = "DELETE_ALL";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const addtodo = (payload) => {
  return { type: "ADD_TODO", payload: payload };
};

export const deleteAll = () => {
  return {
    type: "DELETE_ALL",
  };
};
export const removetodo = (payload) => {
  return {
    type: "REMOVE_TODO",
    payload: payload,
  };
};
export const handleEditSubmit = (payload) => {
  return {
    type : "UPDATE_TODO",
    payload:payload
  }
}