import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit form data to API
    axios
      .post("http://localhost:3001/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
    console.log("Registering user:", formData);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div
        className="p-4 border rounded"
        style={{ width: "100%", maxWidth: "360px" }}
      >
        <h3 className="mb-3 text-center">Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
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
              value={formData.password}
              onChange={handleChange}
              placeholder="Your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
        <div className="text-center mt-3">
          <small>Already have an account?</small>
          <Link
            to="/login"
            className="btn btn-outline-secondary btn-sm mt-1 w-100"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
