import React, { useState } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import createPersistedState from "@plq/use-persisted-state";

export default function Login() {
  const [use] = createPersistedState("token", window.sessionStorage);
  const [form, setForm] = useState({
    username: "",
    password: ""
  });
  const [token, getToken] = use("token", "");

  const [admin, setAdmin] = useState({
    redirect: true
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await Axios.post("http://127.0.0.1:8084/signin", {
        username: form.username,
        password: form.password
      });

      getToken(result.data);
      setAdmin(result.data.Admin);

      if (result.status === 200) {
        alert("berhasil login");
      } else {
        throw new Error("Failed to !");
      }
    } catch (err) {
      console.log(err);
    }
  };
  // const [token, getToken] = use("token", "");
  const updateField = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  if (admin === true) {
    return <Redirect to={"/home"} />;
  } else if (admin === false) {
    return <Redirect to={"/"} />;
  }
  return (
    <div>
      <h2>Sign In</h2>
      <div class="container mt-5">
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            {/* <label for="Email">username</label> */}
            <input
              name="username"
              type="text"
              placeholder="Enter username"
              class="form-control"
              value={form.username}
              onChange={updateField}
            />
          </div>
          <div class="form-group">
            {/* <label for="password">password</label> */}
            <input
              name="password"
              type="text"
              placeholder="Enter Password"
              class="form-control"
              value={form.password}
              onChange={updateField}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
