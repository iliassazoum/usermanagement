import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function UserForms() {
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [showEdit, setShowEdit] = useState(-1);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");

  useEffect(() => {
    // Fetch users from API when component mounts
    axios.get("http://localhost:8080/user/all").then((response) => {
      setUsers(response.data);
    });
  }, []);

  function addUser() {
    if (!newUserName || !newUserEmail) {
      alert("Please enter a user name and email.");
      return;
    }

    const user = {
      name: newUserName,
      email: newUserEmail,
    };

    axios.post("http://localhost:8080/user/add", user).then((response) => {
      setUsers([...users, response.data]);
      setNewUserName("");
      setNewUserEmail("");
    });
  }

  function deleteUser(id) {
    axios.delete(`http://localhost:8080/user/delete/${id}`).then(() => {
      const newArray = users.filter((user) => user.id !== id);
      setUsers(newArray);
    });
  }

  function editUser(id) {
    const user = users.find((user) => user.id === id);

    const updatedUser = {
      id: user.id,
      name: updatedName || user.name,
      email: updatedEmail || user.email,
    };

    axios.put("http://localhost:8080/user/update", updatedUser).then(() => {
      const updatedUsers = users.map((user) =>
        user.id === id ? updatedUser : user
      );
      setUsers(updatedUsers);
      setShowEdit(-1);
      setUpdatedName("");
      setUpdatedEmail("");
    });
  }

  return (
    <div className="app">
      <h1>Add a user to the list</h1>
      <input
        type="text"
        placeholder="Add user name"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Add user email..."
        value={newUserEmail}
        onChange={(e) => setNewUserEmail(e.target.value)}
      />
      <button onClick={() => addUser()}>Add</button>

      <h1>List of users</h1>

      <ul>
        {users.map((user) => {
          return (
            <div key={user.id}>
              
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="delete-button" onClick={() => deleteUser(user.id)}>
                  ❌
                </button>
                <button onClick={() => setShowEdit(user.id)}>Edit</button>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
             

              {showEdit === user.id ? (
                <div>
                  <input
                    type="text"
                    placeholder={user.name}
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder={user.email}
                    value={updatedEmail}
                    onChange={(e) => setUpdatedEmail(e.target.value)}
                  />
                  <button onClick={() => editUser(user.id)}>Update</button>
                </div>
              ) : null}
            </div>
          );
        })}
      </ul>
    </div>
  );
    }

  export default UserForms;