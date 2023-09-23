//HOOK'S
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

//COMPONENT'S
import Card from "./Card";
import Pagination from "./Pagination";

//STYLESHEETS
import "../StyleSheets/Cards.css";

const itemsPerPage = 9;

export default function Cards({ characters, onClose }) {
  return (
    <div className="container">
      {characters.map((personaje) => {
        return (
          <Card
            key={personaje.id}
            id={personaje.id}
            name={personaje.name}
            origin={personaje.origin}
            status={personaje.status}
            species={personaje.species}
            gender={personaje.gender}
            image={personaje.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
}
