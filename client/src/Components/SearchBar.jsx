import React, { useState } from "react";
import "../StyleSheets/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    // console.log(event.target.value);
    setId(event.target.value);
  };

  const calback = () => {
    onSearch(id);
    setId("");
  };

  const personajeAleatorio = () => {
    const id = Math.floor(Math.random() * (826 - 0 + 1) + 0);
    //console.log(x);
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
      <button 
        className="aceptar" 
        onClick={calback}
        >Agregar
      </button>
      <button 
        className="aceptar" 
        onClick={personajeAleatorio}
        >Random
      </button>
    </div>
  );
};

export default SearchBar;
