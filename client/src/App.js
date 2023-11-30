// COMPONENTS
import { About, Favorites, Detail, Home, Login, Error, User } from "./Views";
import NavBar from "./Components/NavBar";

// HOOK'S
import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// REDUX
import { setDataUser } from "./Redux/actions";

// LIBRARY
import Swal from "sweetalert2";
// CSS
import "./StyleSheets/App.css";

// JAVASCRIP

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginPage = location.pathname === "/";
  const userData = useSelector((state) => state.infoUser);
  const accessUser = userData?.access;

  useEffect(() => {
    if (userData && accessUser) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }, [accessUser]);

  useEffect(() => {
    if (loginPage && userData) {
      navigate("/");
      dispatch(setDataUser());
    }
  }, [location]);

  useEffect(() => {
    if (!userData && !accessUser) {
      navigate("/");
    }
  }, [userData]);

  return (
    <div className="App">
      {!loginPage && <NavBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={<Home user={userData?.user} idUser={userData?.idUser} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="/favorites"
          element={
            <Favorites idUser={userData?.idUser} user={userData?.user} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/user"
          element={
            <User
              idUser={userData?.idUser}
              user={userData?.user}
              idLevel={userData?.idLevel}
            />
          }
        />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
