import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFav, getNameCharacter } from "./Redux/actions";
import axios from "axios";
// CSS
import "./StyleSheets/App.css";

// COMPONENTS
import Nav from "./Components/Nav";
import Cards from "./Components/Cards";
import About from "./Components/About";
import Detail from "./Components/Detatil";
import Error from "./Components/Error";
import Form from "./Components/Form";
import Favorites from "./Components/Favorites";

const App = () => {
  const location = useLocation();
  const selectUser = useSelector((state) => state.infoUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const initialAccess = localStorage.getItem("access") === "true";
  const [access, setAccess] = useState(initialAccess);

  const [characters, setCharacters] = useState([]);
  const [email, setEmail] = useState("");

  const onSearch = async (id) => {
    const URL = `http://localhost:3001/rickandmorty/characters`;
    try {
      if (id > 0 || (id < 826 && Number.isInteger(+id))) {
        const responseApi = await axios(`${URL}/${id}`);
        const dataClear = responseApi.data;
        const respuesta = verificarPersonaje(dataClear.id, characters);
        if (respuesta === true)
          window.alert("El personaje ya existe no se puede repetir :C");
        else {
          if (dataClear.id)
            setCharacters((oldChars) => [...oldChars, dataClear]);
          else window.alert("¡No hay personajes con este ID!");
        }
      } else {
        const responseApi = (await axios(`${URL}?name=${id}`)).data;
        setCharacters((oldChars) => [...oldChars, ...responseApi]);
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
      ? dispatch(removeFav(selectUser?.idUser, id)) && deletePerson(idFav)
      : deletePerson(id);
  };

  const signUp = async (userData) => {
    const URL = `http://localhost:3001/rickandmorty/user`;
    const { email } = userData;
    try {
      const { access } = (await axios.post(URL, userData)).data;
      if (access === true) {
        //HACER TEST
        localStorage.setItem("create", "true");
        setEmail(email);
        setAccess(true);
        access && navigate("/home");
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

  useEffect(() => {
    !access && navigate("/");
    setCharacters([]);
  }, [access]);

  useEffect(() => {
    if (selectUser && selectUser.access === true) {
      setEmail(email);
      localStorage.setItem("access", "true");
      setAccess(true);
      access && navigate("/home");
    }
  }, [selectUser]);

  return (
    <div className="App">
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} logout={logout} email={email} />
      )}
      <Routes>
        <Route
          path="/home"
          element={
            <Cards
              idUser={selectUser?.idUser}
              characters={characters}
              onClose={onClose}
            />
          }
        />
        <Route path="/" element={<Form signUp={signUp} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path=":id" element={<Error />} />
        <Route
          path="/favorites"
          element={
            <Favorites idUser={selectUser?.idUser} user={selectUser?.user} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
