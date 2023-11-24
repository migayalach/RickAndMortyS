import axios from "axios";

// HOOK'S
import { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFav,
  getIdUser,
  getNameCharacter,
  loginUser,
} from "./Redux/actions";

// CSS
import "./StyleSheets/App.css";

// COMPONENTS
import { About, Detail, Error, Home, Login } from "./Views";
import Nav from "./Components/Nav";
import Cards from "./Components/Cards";
import Form from "./Components/Form";
import Favorites from "./Components/Favorites";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectUser = useSelector((state) => state.infoUser);

  useEffect(() => {
    if (selectUser && selectUser.access === true) {
      navigate("/home");
    }
  }, [selectUser]);

  return (
    <div className="App">
      {/* {location.pathname !== "/" && <Nav />} */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={<Home />}
          // element={<Cards />}
        />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/detail/:id" element={<Detail />} /> */}
        {/* <Route path=":id" element={<Error />} /> */}
        {/* <Route path="/favorites" element={<Favorites />} /> */}
      </Routes>
    </div>
  );
};

export default App;
