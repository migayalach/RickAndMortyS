import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import "../StyleSheets/Card.css";

const Card = ({
  id,
  name,
  origin,
  status,
  species,
  gender,
  image,
  onClose,
}) => {
  const recipe = useSelector((state) => state.myFavorites);
  const { idUser } = useSelector((state) => state.infoUser);
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const getIdPersonBDD = (idSearch) => {
    const aux = recipe.filter(({ idPerson }) => idPerson === idSearch);
    return aux[0].id;
  };
  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      const idPerson = getIdPersonBDD(id);
      dispatch(removeFav(idUser, idPerson));
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
          onClose,
          idUser,
        })
      );
    }
  };

  useEffect(() => {
    recipe.forEach((fav) => {
      if (fav.name === name) {
        setIsFav(true);
      }
    });
  }, [recipe]);

  return (
    <div className="card-container">
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <div className="boton">
        <button
          className="cerrar"
          onClick={() =>
            !isFav
              ? onClose(id, "noBdd")
              : onClose(getIdPersonBDD(id), "bdd", id)
          }
        >
          X
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

export default Card;
