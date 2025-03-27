import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AuthPage.scss';

export default function AuthPage() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/auth/login', { ...form });

      console.log('Login successful:', response.data);
      setMessage('Login successful!');

      navigate('/'); // Redirect to the home page after successful login
    } catch (error) {
      console.error('Login error:', error);
      if (error.response) {
        setMessage('Error during login: ' + error.response.data.message);
      } else if (error.request) {
        setMessage('No response from the server');
      }
    }
  };

  const registerHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/auth/registration', { ...form });
      console.log('Registration successful:', response.data);
      setMessage('Registration successful!');
      setInterval(() => {navigate('/auth/login')}, 1400);
    } catch (error) {
      console.error('Registration error:', error);
      if (error.response) {
        setMessage('Error during registration: ' + error.response.data.message);
      } else if (error.request) {
        setMessage('No response from the server');
      }
    }
  };

  return (
    <div className="container">
      <div className="auth-page">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <h3>Authorization</h3>
                {/* Use onSubmit on the form itself */}
                <form className="form form-login" onSubmit={loginHandler}>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="email"
                        name="email"
                        className="validate"
                        onChange={changeHandler}
                        value={form.email}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="password"
                        name="password"
                        className="validate"
                        onChange={changeHandler}
                        value={form.password}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    {/* Removed onChange here, it should be onSubmit on the form */}
                    <button className="waves-effect waves-light btn btn blue" type="submit">
                      Log In
                    </button>
                    <Link to="/auth/registration" className="btn-outline btn-reg">
                      Not registered?
                    </Link>
                  </div>
                </form>
                {message && <p className="message">{message}</p>} {/* Show message */}
              </>
            }
          />
          <Route
            path="/registration"
            element={
              <>
                <h3>Registration</h3>
                <form className="form form-login" onSubmit={registerHandler}>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="email"
                        name="email"
                        className="validate"
                        onChange={changeHandler}
                        value={form.email}
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="password"
                        name="password"
                        className="validate"
                        onChange={changeHandler}
                        value={form.password}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <button className="waves-effect waves-light btn btn blue">
                      Register
                    </button>
                    <Link to="/auth/login" className="btn-outline btn-reg">
                      Already have an account?
                    </Link>
                  </div>
                </form>
                {message && <p className="message">{message}</p>} {/* Display message */}
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
