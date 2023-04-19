import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./actions";
import UserForm from "./UserForm";
import UserList from "./UserList";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <UserForm />
      <UserList />
    </div>
  );
};

export default App;
