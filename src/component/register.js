import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { Redirect } from "react-router-dom";
// import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Register = props => {
  const { register, watch, errors } = useForm();

  const [form, usedForm] = useState({
    name: "",
    username: "",
    email: "",
    password: ""
  });
  const [redirects, setRedirect] = useState({
    redirect: false
  });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const result = await Axios.post("http://127.0.0.1:8084/signup", {
        name: form.name,
        username: form.username,
        email: form.email,
        password: form.password
      });

      console.log(result.data);

      if (result.status === 201) {
        alert("Register Success");
        setRedirect({ redirect: true });
      } else {
        throw new Error("Failed to insert data!");
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(redirects);

  if (redirects.redirect === true) {
    return <Redirect to={"/login"} />;
  }
  const updateField = e => {
    usedForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>
        <center>Sign up</center>
      </h2>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <input
              type="text"
              placeholder="Enter name"
              className="form-control"
              name="name"
              ref={register({ required: "name required" })}
              onChange={updateField}
            />
          </div>
          <span>{errors.name && errors.name.message}</span>

          <div class="form-group">
            <input
              name="username"
              placeholder="Enter username"
              type="text"
              class="form-control"
              value={form.username}
              onChange={updateField}
            />
          </div>

          <div class="form-group">
            <input
              type="Email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              ref={register({
                required: "email required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "email is Invalid"
                }
              })}
              onChange={updateField}
            />
            <span>{errors.email && errors.email.message}</span>
          </div>

          <div class="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Enter password"
              ref={register({
                required: "password required",
                minLength: { value: 4, message: "password atleast 4 character" }
              })}
              onChange={updateField}
            />
            <span>{errors.password && errors.password.message}</span>
          </div>

          <div class="form-group">
            <input
              type="password"
              className="form-control"
              name="passwordConfirm"
              placeholder="Password confirmasi"
              ref={register({
                required: "passwordConfirm required",
                validate: value =>
                  value === watch().password || "password don't match"
              })}
              onChange={updateField}
            />
            <span>
              {errors.passwordConfirm && errors.passwordConfirm.message}
            </span>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
