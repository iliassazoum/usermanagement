import { combineReducers } from "redux";

const userReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_USERS_SUCCESS":
      return action.payload;
    case "ADD_USER_SUCCESS":
      return [...state, action.payload];
    case "DELETE_USER_SUCCESS":
      return state.filter((user) => user.id !== action.payload);
    default:
      return state;
  }
};

export default combineReducers({
  users: userReducer,
});
