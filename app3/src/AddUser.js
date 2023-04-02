import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../actions";
import UserForm from "./UserForm";

const AddUser = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(addUser(values));
  };

  return (
    <div>
      <h1>Add User</h1>
      <UserForm onSubmit={onSubmit} />
    </div>
  );
};

export default AddUser;
