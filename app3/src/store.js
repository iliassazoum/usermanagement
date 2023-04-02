import { createStore } from "redux";

const initialState = {
  users: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USERS":
      return { ...state, users: action.payload };
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
    case "EDIT_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
}

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/user/all");
  dispatch({ type: "FETCH_USERS", payload: res.data });
};

export const addUser = (user) => async (dispatch) => {
  const res = await axios.post("http://localhost:8080/user/add", user);
  dispatch({ type: "ADD_USER", payload: res.data });
};

export const editUser = (user) => async (dispatch) => {
  const res = await axios.put(`http://localhost:8080/user/update`, user);
  dispatch({ type: "EDIT_USER", payload: res.data });
};

export const deleteUser = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:8080/user/delete/${id}`);
  dispatch({ type: "DELETE_USER", payload: id });
};

const store = createStore(userReducer);

export default store;
