import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AuthPage.scss';
import Navbar from '../../components/Navbar/Navbar';

export default function AuthPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const loginHandler = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post('/auth/login', { ...form });
      localStorage.setItem('token', response.data.token);
      console.log('Login successful:', response.data);
      setMessage('Login successful!');
      setTimeout(() => {
        navigate('/loginedhome');
      }, 1400);
    } catch (error) {
      handleError(error);
    }
  };
  
  
  
  const registerHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/auth/register', { ...form });
      console.log('Registration successful:', response.data);
      setMessage('Registration successful!');
      setTimeout(() => {
        navigate('/auth/login');
      }, 1400);
    } catch (error) {
      handleError(error);
    }
  };
  
  const handleError = (error) => {
    console.error(error);
    if (error.response) {
      setMessage('Error: ' + error.response.data.message);
    } else if (error.request) {
      setMessage('No response from the server');
    } else {
      setMessage('An unexpected error occurred');
    }
  };
  

  return (
  <>
  <Navbar />
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
                    <div className="input-field col s12">
                      <input
                        type="text"
                        name="firstname"
                        className="validate"
                        onChange={changeHandler}
                        value={form.firstname}
                      />
                      <label htmlFor="firstname">First Name</label>
                    </div>
                    <div className="input-field col s12">
                      <input
                        type="text"
                        name="lastname"
                        className="validate"
                        onChange={changeHandler}
                        value={form.lastname}
                      />
                      <label htmlFor="lastname">Last Name</label>
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
  </>
  );
}
