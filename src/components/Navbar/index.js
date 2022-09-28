import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { baseURL } from "../../utils/fetchApi";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`${baseURL}/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      });
      let result = await response.json();
      window.alert(result.message);
      if (response.status === 200) {
        sessionStorage.clear();
        navigate("/login");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="navbar navbar-expand navbar-dark bg-primary fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          YukPilih
        </Link>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/profile"
              className={`nav-link ${
                location.pathname === "/profile" ? "active" : ""
              }`}
            >
              Profile
            </Link>
            <Link
              to="/reset-password"
              className={`nav-link ${
                location.pathname === "/reset-password" ? "active" : ""
              }`}
            >
              Change Password
            </Link>
          </div>
          <div className="navbar-nav ml-auto">
            <form onSubmit={handleLogout}>
              <button type="submit" className="btn btn-outline-light">
                Logout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
