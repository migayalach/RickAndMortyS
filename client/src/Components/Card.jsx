import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../Redux/actions";
import { connect } from "react-redux";
import "../StyleSheets/Card.css";

const Card = ({
  id,
  name,
  species,
  gender,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({
        id,
        name,
        species,
        gender,
        image,
        onClose,
      });
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  return (
    <div className="card-container">
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <div className="boton">
        <button className="cerrar" onClick={() => onClose(id)}>
          {" "}
          X{" "}
        </button>
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
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (personaje) => dispatch(addFav(personaje)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
