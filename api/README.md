Here's an example of how you can create a React app that consumes the REST API you described, using Redux and Formik:

Install the necessary dependencies:
Copy code
npm install react-redux redux redux-thunk formik yup axios
Create a store.js file that sets up the Redux store:
javascript
Copy code
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
Create a reducers.js file that defines the reducers for your app:
javascript
Copy code
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
Create an actions.js file that defines the actions for your app:
javascript
Copy code
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
Create a UserForm.js component that allows the user to add a new user:
python
Copy code
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import \* as Yup from "yup";
import { useDispatch } from "react-redux";
import { addUser } from "./actions";

const validationSchema = Yup.object().shape({
name: Yup.string().required("Name is required"),
email: Yup.string().email("Invalid email").required("Email is required"),
});

const UserForm = () => {
const dispatch = useDispatch();

const handleSubmit = (values, { resetForm }) => {
dispatch(addUser(values));
resetForm();
};

return (
<Formik
initialValues={{ name: "", email: "" }}
validationSchema={validationSchema}
onSubmit={handleSubmit} >
{({ errors, touched }) => (

<Form>
<div>
<label htmlFor="name">Name</label>
<Field type="text" id="name" name="name" />
<ErrorMessage name="name" component="div" className="error" />
</div>
<div>
<label htmlFor="email">Email</label>
<Field type="email" id="email" name="email" />
<ErrorMessage name="email" component="div" className

Iliass Azoum
please finish what you wrote
className="error" />

</div>
<button type="submit">Add User</button>
</Form>
)}
</Formik>
);
};

export default UserForm;

sql
Copy code

6. Create a `UserList.js` component that displays the list of users and allows the user to delete a user:

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./actions";

const UserList = () => {
const users = useSelector((state) => state.users);
const dispatch = useDispatch();

const handleDelete = (id) => {
dispatch(deleteUser(id));
};

return (

<div>
<h2>Users</h2>
<ul>
{users.map((user) => (
<li key={user.id}>
{user.name} ({user.email}){" "}
<button onClick={() => handleDelete(user.id)}>Delete</button>
</li>
))}
</ul>
</div>
);
};

export default UserList;

markdown
Copy code

7. Create an `App.js` component that uses `UserForm` and `UserList`:

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

markdown
Copy code

8. Render the `App` component:

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
document.getElementById("root")
);

css
Copy code

This is just an example implementation. You may need to modify
