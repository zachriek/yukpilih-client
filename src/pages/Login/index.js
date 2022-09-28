import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GuestLayout from "../../layouts/GuestLayout";
import { baseURL } from "../../utils/fetchApi";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`${baseURL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let result = await response.json();
      window.alert(result.message);
      if (response.status === 200) {
        sessionStorage.setItem("token", result.access_token);
        navigate("/");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <GuestLayout title="Login">
      <div className="card">
        <div className="card-header bg-primary text-light">Login</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={loginData.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary shadow-sm">
              Login
            </button>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Login;
