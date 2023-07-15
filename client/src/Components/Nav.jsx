import React from "react";
import SearchBar from "./SearchBar";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = ({ onSearch, logout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <button>
        <NavLink to="/about">About</NavLink>
      </button>
      <button>
        <NavLink to="/home">Home</NavLink>
      </button>
      <button>
        <NavLink to="/favorites">Favoritos</NavLink>
      </button>
      <button onClick={handleLogout}>Salir</button>
    </div>
  );
};

export default Nav;
