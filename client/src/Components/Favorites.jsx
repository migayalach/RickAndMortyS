import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterCards, orderCards, removeFav } from "../Redux/actions";
import "../StyleSheets/Card.css";

const Favorites = () => {
  const [aux, setAux] = useState(false);
  const recipe = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleFavorite = (event) => {
    const id = event.target.name;
    dispatch(removeFav(id));
  };

  const handleOrder = (event) => {
    const option = event.target.value;
    setAux(true);
    dispatch(orderCards(option));
  };

  const handleFilter = (event) => {
    const option = event.target.value;
    option === "All" ? console.log(true) : dispatch(filterCards(option));
  };

  return (
    <div>
      <h1>Favoritos</h1>

      <label htmlFor="Order">Order</label>
      <select name="Order" onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <label htmlFor="Gender">Gender</label>
      <select name="Gender" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Felame</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>

      {recipe?.map(({ id, name, species, gender, image }) => {
        return (
          <div className="card-container" key={id}>
            <button name={id} onClick={handleFavorite}>
              {" "}
              ❤️{" "}
            </button>
            <div>
              <Link to={`/detail/${id}`}>
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
      })}
    </div>
  );
};

export default Favorites;
