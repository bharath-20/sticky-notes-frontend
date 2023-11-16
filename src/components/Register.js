import React, { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate , Link } from "react-router-dom";
import "../styles/Register.css"; 

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "USER",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const result = await registerUser(formData);
      console.log("Registration successful:", result);
      navigate("/login");
    } catch (error) {
      console.log("error",error);
      if (error.response) {
        if (error.response.status === 400) {
          setError("All fields are required");
        } else if (error.response.status === 409) {
          setError("Email already exists");
        } else if (error.response.status === 500) {
          setError("Internal server error");
        }
      } else if (error.request) {
        console.error("No response received:", error.request);
        setError("No response received from the server");
      } else if(error.error)
      {
        setError(error.error);
      }
      else {
        console.error("Request setup error:", error.message);
        setError("Error setting up the request");
      }
    }
  };

  return (
    <div className="register-container">
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} required />

        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" onChange={handleChange} required />

        <button type="submit">Register</button>
      </form>
      <p>
        Already Registered? <Link to="/login">Login here</Link>
      </p>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Register;
