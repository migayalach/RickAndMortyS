import axios from "axios";

// HOOK'S
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFav } from "./Redux/actions";

// CSS
import "./StyleSheets/App.css";

// COMPONENTS
import {
  About,
  Card,
  Cards,
  Detail,
  Error,
  Favorites,
  Form,
  Nav,
  Pagination,
  SearchBar,
} from "./Components";

const App = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialAccess = localStorage.getItem("access") === "true";
  const [access, setAccess] = useState(initialAccess);

  const [characters, setCharacters] = useState([]);

  // BUG AL ACTUALIZAR
  useEffect(() => {
    !access && navigate("/");
    setCharacters([]);
    for (let i = 0; i < characters.length; i++) {
      dispatch(removeFav(characters[i].id));
    }
  }, [access]);

  const onSearch = async (id) => {
    try {
      const responseApi = await axios(
        `http://localhost:3001/rickandmorty/characters/${id}`
      );
      const dataClear = responseApi.data;
      const respuesta = verificarPersonaje(dataClear.id, characters);
      if (respuesta === true)
        window.alert("El personaje ya existe no se puede repetir :C");
      else {
        if (dataClear.id) setCharacters((oldChars) => [...oldChars, dataClear]);
        else window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      alert("¡No hay personajes con este ID!");
    }
  };

  const verificarPersonaje = (id, characters) => {
    let aux = false;
    for (const i of characters) {
      if (id === i.id) {
        aux = true;
        break;
      }
    }
    return aux;
  };

  const onClose = (id) => {
    let newId = parseInt(id);
    const newCharacters = characters.filter(
      (personajes) => personajes.id !== newId
    );
    setCharacters(newCharacters);
    dispatch(removeFav(id));
  };

  const login = async (userData) => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    try {
      const { access } = (
        await axios(URL + `?email=${email}&password=${password}`)
      ).data;
      if (access === true) {
        localStorage.setItem("access", "true");
        setAccess(true);
        access && navigate("/home");
      } else {
        alert("error");
      }
    } catch (error) {
      alert("error");
    }
  };

  const logout = () => {
    localStorage.removeItem("access");
    setAccess(false);
  };

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path=":id" element={<Error />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;
