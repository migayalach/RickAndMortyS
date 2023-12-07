// COMPONENTS

// HOOK'S
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// REDUX

// LIBRARY
import axios from "axios";

// CSS
import "../../StyleSheets/Detail.css";

// JAVASCRIP

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/characters/${id}`).then(
      ({ data: { characterData } }) => {
        if (characterData.length) {
          setCharacter(characterData[0]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <>
      {character && (
        <div className="deatil">
          <div className="info-users">
            <p className="nombre-character">{character.name}</p>
            <p className="datos-character">Species || {character.species}</p>
            <p className="datos-character">Gender || {character.gender}</p>
          </div>
          <img
            className="image-deatil"
            src={character.image}
            alt={character.name}
          />
        </div>
      )}
    </>
  );
};

export default Detail;
