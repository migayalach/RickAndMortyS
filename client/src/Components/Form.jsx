// COMPONET'S

// HOOK'S
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

// LIBRARY

// REDUX
import { loginUser, createAccount, updateUser } from "../Redux/actions";

// JAVASCRIP
import validation from "../Utils/validation";

// STYLESHEET'S
import "../StyleSheets/Form.css";

const Form = ({ idUser, idLevel, user }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [userOption, setUserOption] = useState("Check In");

  let initialEmail = "";
  if (user) {
    initialEmail = user;
  }

  const [userData, setUserData] = useState({
    email: initialEmail,
    password: "",
  });

  const handleOption = () => {
    userOption === "Login" ? setUserOption("Check In") : setUserOption("Login");
  };

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    const optionButton = event.target.name;
    event.preventDefault();
    if (optionButton === "login") {
      dispatch(loginUser(userData));
    } else if (optionButton === "checkIn") {
      dispatch(createAccount(userData));
      event.preventDefault();
    } else if (optionButton === "update-Data") {
      dispatch(updateUser(idUser, idLevel, userData));
    }
  };

  useEffect(() => {
    if (location.pathname === "/user") {
      setUserData({ email: initialEmail });
    }
  }, []);

  return (
    <form className="form-component">
      {location.pathname === "/" && (
        <img
          className="logo"
          src={require(`../image/Rick-And-Morty.png`)}
          alt="Login Rick"
        />
      )}
      <label className="texto" htmlFor="email">
        Email:
      </label>
      <input
        type="text"
        value={userData.email}
        name="email"
        onChange={handleChange}
        placeholder="abc@gmail.com"
        required
        disabled={location.pathname === "/user"}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <label className="texto" htmlFor="password">
        Password
      </label>
      <input
        type={showPassword ? "text" : "password"}
        value={userData.password}
        name="password"
        onChange={handleChange}
        placeholder="*************"
        required
      />
      {/* {errors.password && <p className="error">{errors.password}</p>} */}
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className={`btn-statePassword toggle-password-button ${
          showPassword ? "show-password" : "hide-password"
        }`}
      >
        {showPassword ? "Disguise" : "Show"} password
      </button>

      {location.pathname === "/" ? (
        <>
          {userOption === "Check In" ? (
            <button className="btn-envio" name="login" onClick={handleSubmit}>
              Login
            </button>
          ) : (
            <button
              className="btn-registro"
              name="checkIn"
              onClick={handleSubmit}
            >
              Create new account
            </button>
          )}
          <p className="text-option" onClick={handleOption}>
            {userOption}
          </p>
        </>
      ) : (
        <button
          className="btn-registro"
          name="update-Data"
          onClick={handleSubmit}
        >
          Change data
        </button>
      )}
    </form>
  );
};

export default Form;
