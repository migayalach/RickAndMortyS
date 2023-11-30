//HOOK'S
import { useState } from "react";

//COMPONENT'S
import Card from "./Card";
import Pagination from "./Pagination";

// HOOK'S

//STYLESHEETS
import "../StyleSheets/Cards.css";

export default function Cards({ characters, idUser, flag }) {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = characters.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="principal">
      <div className=" container">
        {currentItems?.map(
          (
            {
              id,
              idPerson,
              name,
              gender,
              species,
              origin: { url },
              image,
              status,
              create,
            },
            index
          ) => {
            return (
              <Card
                key={index}
                id={id}
                idPerson={idPerson}
                name={name}
                origin={name}
                url={url}
                status={status}
                species={species}
                gender={gender}
                image={image}
                idUser={idUser}
                create={create}
                flag={flag}
              />
            );
          }
        )}
        <div className="container-pagination"></div>
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={characters.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />{" "}
    </div>
  );
}
