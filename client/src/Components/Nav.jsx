import React from "react";
import SearchBar from "./SearchBar";

const Nav = ({ onSearch, logout, email }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} logout={logout} />
      <div>
        <p>
          Bienvenid@: <span>{email}</span>
        </p>
      </div>
    </div>
  );
};

export default Nav;
