import "./StyleSheets/App.css";
import { useState } from "react";
import Nav from "./Components/Nav";
import Cards from "./Components/Cards";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
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
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
