import React from "react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch, logout }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} logout={logout}/>
      <div className="button-nav">
        <button className="aceptar-nav">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </button>
        <button className="aceptar-nav">
          <NavLink className="nav-link" to="/home">Home</NavLink>
        </button>
        <button className="aceptar-nav">
          <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Nav;
