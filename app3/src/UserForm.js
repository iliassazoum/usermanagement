import React from "react";
import { useFormik } from "formik";

function UserForm({ user, onSubmit }) {
  const formik = useFormik({
    initialValues: {
      name: user.name || "",
      email: user.email || "",
    },
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <button type="submit">{user.id ? "Update" : "Add"}</button>
    </form>
  );
}

export default UserForm;
