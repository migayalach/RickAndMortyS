// COMPONET'S

// HOOK'S
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// REDUX
import { charactersCollection } from "../Redux/actions";

// BOOKSHOP
import axios from "axios";

// STYLESHEET'S
import "../StyleSheets/SearchBar.css";

const NavBar = () => {
  const URL = `http://localhost:3001/rickandmorty`;
  const location = useLocation();
  const dispatch = useDispatch();
  const [character, setCharacter] = useState("");
  const selectChatacters = useSelector((state) => state.characters);

  const characterRandom = () => Math.floor(Math.random() * (826 - 0 + 1) + 0);

  const arrayComparison = (redux, api) => {
    const aux = [];
    let c = 0;
    for (let i = 0; i < api.length; i++) {
      c = 0;
      for (let j = 0; j < redux.length; j++) {
        if (api[i].id === redux[j].id) {
          break;
        } else {
          c++;
        }
      }
      if (c === redux.length) {
        redux.push(api[i]);
      }
    }
    return aux;
  };

  const repeatedCharacter = (characterApi) => {
    if (selectChatacters.length > 0) {
      if (characterApi.length > 0 && characterApi.length < 2) {
        const aux = selectChatacters.find(
          ({ id }) => id === characterApi[0].id
        );
        if (!aux) {
          dispatch(charactersCollection(characterApi));
        }
      } else {
        dispatch(
          charactersCollection(arrayComparison(selectChatacters, characterApi))
        );
      }
    } else {
      dispatch(charactersCollection(characterApi));
    }
  };

  const characterSearch = async (characterApi) => {
    try {
      const { characterData } = Number.isInteger(+characterApi)
        ? (await axios.get(`${URL}/characters/${characterApi}`)).data
        : (await axios.get(`${URL}/characters?name=${characterApi}`)).data;
      repeatedCharacter(characterData);
    } catch (error) {}
  };

  const changeCharacter = async (event) => {
    if (character) {
      characterSearch(character);
      setCharacter("");
    } else if (event.target.id) {
      const randomCharacter = characterRandom(event.target.id);
      characterSearch(randomCharacter);
    }
  };

  const searchCharacter = (event) => {
    setCharacter(event.target.value);
  };

  useEffect(() => {}, [selectChatacters]);

  return (
    <>
      <div className="barra-de-navegacion">
        {location.pathname === "/home" && (
          <>
            <div className="aceptar-nav">
              <input
                className="busqueda"
                type="search"
                name="character"
                value={character}
                placeholder="Example: Data: 1 'o' Pepe"
                onChange={searchCharacter}
              />
              <button className="aceptar" onClick={changeCharacter}>
                Accep
              </button>
            </div>
            <div>
              <button
                className="aceptar"
                onClick={changeCharacter}
                id="RandomCharacter"
              >
                Ramdon
              </button>
            </div>
          </>
        )}
        <div>
          <button className="aceptar">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </button>
        </div>
        <div>
          <button className="aceptar">
            <NavLink className="nav-link" to="/favorites">
              Favorites
            </NavLink>
          </button>
        </div>
        <div>
          <button className="aceptar">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </button>
        </div>
        <div>
          <button className="aceptar">
            <NavLink className="nav-link" to="/user">
              User
            </NavLink>
          </button>
        </div>
        <div>
          <button className="aceptar">
            <NavLink className="nav-link" to="/">
              Salir
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
