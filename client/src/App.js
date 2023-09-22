import axios from "axios";

// HOOK'S
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFav, getIdUser } from "./Redux/actions";

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

const App = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialAccess = localStorage.getItem("access") === "true";
  const [access, setAccess] = useState(initialAccess);

  const [characters, setCharacters] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    !access && navigate("/");
    setCharacters([]);
  }, [access]);

  const onSearch = async (id) => {
    try {
      if (id > 0 || id < 826) {
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
      } else {
        console.log("nombre");
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

  const deletePerson = (id) => {
    let newId = parseInt(id);
    const newCharacters = characters.filter(
      (personajes) => personajes.id !== newId
    );
    setCharacters(newCharacters);
  };

  const onClose = (id, str, idFav) => {
    str === "bdd"
      ? dispatch(removeFav(id)) && deletePerson(idFav)
      : deletePerson(id);
  };

  const login = async (userData) => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/user/";
    try {
      const { access } = (
        await axios(URL + `?email=${email}&password=${password}`)
      ).data;
      if (access === true) {
        setEmail(email);
        localStorage.setItem("access", "true");
        setAccess(true);
        dispatch(getIdUser(email));
        access && navigate("/home");
      } else {
        alert("error");
      }
    } catch (error) {
      alert("error");
    }
  };

  const signUp = async (userData) => {
    const URL = `http://localhost:3001/rickandmorty/user`;
    const { email } = userData;
    try {
      const { create } = (await axios.post(URL, userData)).data;
      if (create === true) {
        //HACER TEST
        localStorage.setItem("create", "true");
        setEmail(email);
        setAccess(true);
        dispatch(getIdUser(email));
        create && navigate("/home");
        //HASTA AQUI
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
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} logout={logout} email={email} />
      )}
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/" element={<Form login={login} signUp={signUp} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path=":id" element={<Error />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;
