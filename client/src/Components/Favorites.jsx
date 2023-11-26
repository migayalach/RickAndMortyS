import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  filterCards,
  removeFav,
  allFavorites,
} from "../Redux/actions";
import "../StyleSheets/Card.css";

const Favorites = ({ idUser, user }) => {
  const [character, setCharacter] = useState({
    order: "",
    gender: "",
    email: user,
  });

  const recipe = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleFavorite = (event) => {
    const id = event.target.name;
    dispatch(removeFav(idUser, id));
  };

  const handleFilter = (event) => {
    setCharacter({
      ...character,
      [event.target.name]: event.target.value,
    });
  };

  const searchData = (event) => {
    event.preventDefault();
    dispatch(filterCards(character));
  };

  useEffect(() => {
    dispatch(allFavorites(idUser));
  }, []);
  
  return (
    <div>
      <h1>Favoritos</h1>
      <form onSubmit={searchData}>
        <label htmlFor="Order">Order</label>
        <select name="order" onChange={handleFilter}>
          <option value=""></option>
          <option value="ASC">Ascendente</option>
          <option value="DESC">Descendente</option>
        </select>

        <label htmlFor="Gender">Gender</label>
        <select name="gender" onChange={handleFilter}>
          <option value=""></option>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Felame</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <div>
          <button type="submit">Buscar</button>
        </div>
      </form>

      {recipe?.map(
        ({ id, idPerson, name, origin, status, species, gender, image }) => {
          return (
            <div className="card-container" key={id}>
              <button name={id} onClick={handleFavorite}>
                ❤️
              </button>
              <div>
                <Link to={`/detail/${idPerson}`}>
                  <h2 className="nombre">{name}</h2>
                </Link>
                <img className="imagen" src={image} alt={name} />
                <div className="pie-de-pagina">
                  <h2 className="datos">{species}</h2>
                  <h2 className="datos">{gender}</h2>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Favorites;
