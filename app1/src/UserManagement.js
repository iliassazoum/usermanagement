import React from 'react';
import { connect } from 'react-redux';
import UserForm from './UserForm';

const UserManagement = ({ users, addUser }) => {
  return (
    <div>
      <h1>User Management</h1>
      <UserForm onSubmit={addUser} />
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>()
    </div>
  );
};

const mapStateToProps = state => {
  return { users: state.users };
};

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => dispatch({ type: 'ADD_USER', payload: user }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);