import React from "react";
import { Link } from "react-router-dom";
import "../StyleSheets/Card.css";

export default function Card({id, name, species, gender, image, onClose }) {
  return (
    <div className="card-container">
      <div className="boton">
        <button
          className="cerrar"
          onClick={()=>onClose(id)}
        > X </button>
      </div>
      <Link to={`/detail/${id}`}>
        <h2 className="nombre">{name}</h2>
      </Link>
      <img className="imagen" src={image} alt={name} />
      <div className="pie-de-pagina">
        <h2 className="datos">{species}</h2>
        <h2 className="datos">{gender}</h2>
      </div>
    </div>
  );
}
