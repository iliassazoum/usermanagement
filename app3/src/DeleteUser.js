import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../actions";

const DeleteUser = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.find((user) => user.id === parseInt(id))
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const onDelete = () => {
    dispatch(deleteUser(user.id));
    history.push("/");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Delete User</h1>
      <p>Are you sure you want to delete {user.name}?</p>
      <button onClick={onDelete}>Yes</button>
      <button onClick={() => history.push("/")}>No</button>
    </div>
  );
};

export default DeleteUser;
