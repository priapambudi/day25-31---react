import React from "react";
import Navbar from "../component/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const payload = {
      username: username,
      password: password,
    };

    try {
      const response = await axios.post(
        "https://api.mudoapi.tech/login",
        payload
      );
      setToken(response.data.data.token);
      //   console.log(response);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error.response.data.message);
      const errorMessage = error.response.data.message;
      setError(errorMessage);
    }
  };

  return (
    <div>
      <h1>ini login page</h1>
      <Navbar />

      {token && <h1>Login berhasil</h1>}
      {error && <h1>{error}</h1>}
      <div>
        <label htmlFor="username">Username</label>
        <input
          onChange={handleChangeUsername}
          placeholder="username"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChangePassword}
          placeholder="password"
          id="password"
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
