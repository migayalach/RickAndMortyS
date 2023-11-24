// COMPONET'S
import React from "react";
import SearchBar from "./SearchBar";

// HOOK'S
import { useSelector } from "react-redux";

// LIBRARY
// REDUX
// JAVASCRIP
// STYLESHEET'S

const Nav = ({ onSearch, logout }) => {
  const { user } = useSelector((state) => state.infoUser);
  return (
    <div>
      <SearchBar onSearch={onSearch} logout={logout} />
      <div>
        <p>
          Bienvenid@: <span>{user}</span>
        </p>
      </div>
    </div>
  );
};

export default Nav;
