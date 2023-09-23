//HOOK'S
import { useState, useEffect } from "react";

//COMPONENT'S
import Card from "./Card";
import Pagination from "./Pagination";

//STYLESHEETS
import "../StyleSheets/Cards.css";

const itemsPerPage = 9;

export default function Cards({ characters, onClose }) {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage + itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRecipes = characters.slice(indexOfFirstItem, indexOfLastItem);
  
  useEffect(() => {
    setCurrentPage(1);
  }, [characters]);

  return (
    <div className="principal">
      <div className="container">
        {currentRecipes.map((personaje) => {
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
        <div className="container-pagination">
          <Pagination
            dataLength={characters.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
