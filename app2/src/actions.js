import axios from "axios";

const fetchUsersSuccess = (users) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: users,
  };
};

const addUserSuccess = (user) => {
  return {
    type: "ADD_USER_SUCCESS",
    payload: user,
  };
};

const deleteUserSuccess = (id) => {
  return {
    type: "DELETE_USER_SUCCESS",
    payload: id,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    axios.get("http://localhost:8080/user/all").then((response) => {
      dispatch(fetchUsersSuccess(response.data));
    });
  };
};

export const addUser = (user) => {
  return (dispatch) => {
    axios.post("http://localhost:8080/user/add", user).then((response) => {
      dispatch(addUserSuccess(response.data));
    });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:8080/user/delete/${id}`).then(() => {
      dispatch(deleteUserSuccess(id));
    });
  };
};
