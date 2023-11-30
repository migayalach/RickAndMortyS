// COMPONET'S

// HOOK'S
import { useState } from "react";

// REDUX
import { filterCards } from "../Redux/actions";
import { useDispatch } from "react-redux";

// LIBRARY

// JAVASCRIP

// STYLESHEET'S
import "../StyleSheets/Filter.css";

const Filter = ({ user, characters, orderCharacters }) => {
  const dispatch = useDispatch();
  const [character, setCharacter] = useState({
    order: "",
    gender: "",
    email: user,
  });

  const handleFilter = (event) => {
    setCharacter({
      ...character,
      [event.target.name]: event.target.value,
    });
  };

  const searchData = (event) => {
    event.preventDefault();
    characters && orderCharacters(character.order, character.gender);
    user && dispatch(filterCards(character));
  };

  return (
    <>
      <form className="form-filter" onSubmit={searchData}>
        <label className="text-filter" htmlFor="Order">
          Order
        </label>
        <select className="text-select" name="order" onChange={handleFilter}>
          <option value=""></option>
          <option value="ASC">Ascendente</option>
          <option value="DESC">Descendente</option>
        </select>

        <label className="text-filter" htmlFor="Gender">
          Gender
        </label>
        <select className="text-select" name="gender" onChange={handleFilter}>
          <option></option>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Felame</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <div>
          <button className="btn-busqueda" type="submit">
            Buscar
          </button>
        </div>
      </form>
    </>
  );
};

export default Filter;
