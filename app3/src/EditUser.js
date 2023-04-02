import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "../actions";
import UserForm from "./UserForm";

const EditUser = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.find((user) => user.id === parseInt(id))
  );
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(updateUser({ ...user, ...values }));
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit User</h1>
      <UserForm initialValues={user} onSubmit={onSubmit} />
    </div>
  );
};

export default EditUser;
