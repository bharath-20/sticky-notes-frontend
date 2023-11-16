import React, { useState } from 'react';
import { loginUser } from '../services/authService';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await loginUser(credentials);
      console.log('Login successful:', result);
      navigate('/home');
    } catch (error) {
      if(error.error)
      {
        setError(error.error);
      }else {
        setError(error.message);
      }
    }
  };

  return (
    <div className="login-container">
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} />

        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} />

        <button type="submit">Login</button>
      </form>
      <p>
        Not Registered? <Link to="/register">Register here</Link>
      </p>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
