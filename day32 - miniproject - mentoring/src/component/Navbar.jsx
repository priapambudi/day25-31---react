import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("access_token");

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    // hapus semua token
    // localStorage.clear();

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  return (
    <div>
      <Link to="/">
        <h1>Home</h1>
      </Link>

      <Link to="/login">
        <h1>Login</h1>
      </Link>

      {token && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Navbar;
