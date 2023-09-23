import React, { useState } from "react";
import "../StyleSheets/SearchBar.css";
import SubMenu from "./SubMenu";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch, logout }) => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const calback = () => {
    onSearch(id);
    setId("");
  };

  const personajeAleatorio = () => {
    const id = Math.floor(Math.random() * (826 - 0 + 1) + 0);
    onSearch(id);
    setId("");
  };

  return (
    <div className="barra-de-navegacion">
      <input
        className="busqueda"
        type="search"
        onChange={handleChange}
        value={id}
      />
      <button className="aceptar" onClick={calback}>
        Agregar
      </button>
      <button className="aceptar" onClick={personajeAleatorio}>
        Random
      </button>
      <SubMenu />
      <button className="aceptar" onClick={handleLogout}>Salir</button>
    </div>
  );
};

export default SearchBar;
