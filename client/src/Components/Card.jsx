//HOOK'S

//COMPONENT'S

//HOOK'S
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//JAVASCRIP
import { addFav, removeFav, deleteCharacter } from "../Redux/actions";

//STYLESHEETS
import "../StyleSheets/Card.css";

const Card = ({
  idUser,
  id,
  idPerson,
  name,
  gender,
  species,
  url,
  image,
  status,
  create,
  flag,
}) => {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const selectMyFavorites = useSelector((state) => state.myFavorites);
  const characters = useSelector((state) => state.characters);

  const clearDataCard = (characters, selectMyFavorites) => {
    for (let i = 0; i < characters.length; i++) {
      for (let j = 0; j < selectMyFavorites.length; j++) {
        if (characters[i].id === selectMyFavorites[j].id) {
          setIsFav(true);
        } else {
          setIsFav(false);
        }
      }
    }
  };

  const onClose = (id) => {
    const data = characters.filter((characters) => characters.id !== id);
    if (isFav) {
      if (flag === "home") {
        dispatch(removeFav(idUser, id));
      }
      clearDataCard(characters, selectMyFavorites);
    }
    dispatch(deleteCharacter(data));
  };

  const handleFavorite = () => {
    if (isFav === true) {
      if (flag === "home") {
        dispatch(removeFav(idUser, id));
      } else {
        setIsFav(false);
        dispatch(removeFav(idUser, idPerson));
      }
    } else {
      setIsFav(true);
      dispatch(
        addFav({
          id,
          name,
          origin,
          status,
          species,
          gender,
          image,
          idUser,
        })
      );
    }
    if (flag === "home") {
      clearDataCard(characters, selectMyFavorites);
    }
  };

  useEffect(() => {
    create === true && setIsFav(true);
    flag === "home" &&
      selectMyFavorites?.forEach(({ idPerson }) => {
        idPerson === id && setIsFav(true);
      });
  }, [selectMyFavorites]);

  return (
    <div className="card-container">
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <div className="boton">
        {location.pathname === "/home" && (
          <button className="cerrar" onClick={() => onClose(id)}>
            X
          </button>
        )}
      </div>
      {location.pathname === "/home" ? (
        <Link to={`/detail/${id}`}>
          <h2 className="nombre">{name}</h2>
        </Link>
      ) : (
        <Link to={`/detail/${idPerson}`}>
          <h2 className="nombre">{name}</h2>
        </Link>
      )}
      <img className="imagen" src={image} alt={name} />
      <div className="pie-de-pagina">
        <h2 className="datos">{species}</h2>
        <h2 className="datos">{gender}</h2>
      </div>
    </div>
  );
};

export default Card;
