import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Authenticate user
    axios
      .post("http://localhost:3001/login", {
        email: credentials.email,
        password: credentials.password,
      })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
    console.log("Logging in with:", credentials);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div
        className="p-4 border rounded"
        style={{ width: "100%", maxWidth: "360px" }}
      >
        <h3 className="mb-3 text-center">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <div className="text-center mt-3">
          <small>Don't have an account?</small>
          <Link
            to="/register"
            className="btn btn-outline-secondary btn-sm mt-1 w-100"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
