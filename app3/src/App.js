import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser, editUser, deleteUser } from "./actions";
import UserList from "./UserList";
import UserForm from "./UserForm";
import UserSearch from "./UserSearch";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const [selectedUser, setSelectedUser] = React.useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = (user) => {
    dispatch(addUser(user));
  };

  const handleEditUser = (user) => {
    dispatch(editUser(user));
    setSelectedUser(null);
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const handleSearchUser = (name) => {
    dispatch(fetchUsers(name));
  };

  return (
    <div>
      <h1>User List</h1>
      <UserList
        users={users}
        onSelect={(user) => setSelectedUser(user)}
        onDelete={(id) => handleDeleteUser(id)}
      />
      <UserForm
        user={selectedUser}
        onSubmit={handleAddUser || handleEditUser}
      />
    </div>
  );
}
