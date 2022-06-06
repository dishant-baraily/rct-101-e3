import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const fstyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '200px',
    margin: 'auto',
    gap: '10px'
  };
  return (
    <div>
      <h1>Login</h1>
      <form style={fstyle}>
        <input data-cy="login-email" type="email" placeholder="Enter Email"/>
        <input data-cy="login-password" type="password" placeholder="Enter Password" />
        <button data-cy="login-submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
