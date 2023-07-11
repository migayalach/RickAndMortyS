import React from "react";
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
      <h2 className="nombre">{name}</h2>
      <img className="imagen" src={image} alt={name} />
      <div className="pie-de-pagina">
        <h2 className="datos">{species}</h2>
        <h2 className="datos">{gender}</h2>
      </div>
    </div>
  );
}
