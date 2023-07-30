import axios from "axios";
// HOOK'S
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFav } from "./Redux/actions";

// CSS
import "./StyleSheets/App.css";
// COMPONENTS
import Nav from "./Components/Nav";
import Cards from "./Components/Cards";
import About from "./Components/About";
import Detail from "./Components/Deatil";
import Error from "./Components/Error";
import Form from "./Components/Form";
import Favorites from "./Components/Favorites";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [access, setAccess] = useState(false);

  const [characters, setCharacters] = useState([]);

  // BUG AL ACTUALIZAR
  useEffect(() => {
    !access && navigate("/");
    setCharacters([]);
    for (let i = 0; i < characters.length; i++) {
      dispatch(removeFav(characters[i].id));
    }
    // FIN DEL CICLO
    // return "me voy"
  }, [access]);

  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/characters/${id}`).then(
      ({ data }) => {
        const respuesta = verificarPersonaje(data.id, characters);
        if (respuesta === true)
          window.alert("El personaje ya existe no se puede repetir :C");
        else {
          if (data.id) setCharacters((oldChars) => [...oldChars, data]);
          else window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

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

  const login = (userData) => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    });
  }

  const logout = () => {
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
}

export default App;
