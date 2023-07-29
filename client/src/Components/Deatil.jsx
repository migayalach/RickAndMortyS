import { useState, useEffect } from "react";
import axios from "axios";
import "../StyleSheets/Detail.css";

// HOOK
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    // axios(`https://rickandmortyapi.com/api/character/${id}`).then(
    axios(`http://localhost:3001/characters/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);
  return (
    <div>
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
    </div>
  );
};

export default Detail;
