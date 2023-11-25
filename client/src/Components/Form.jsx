// COMPONET'S

// HOOK'S
import { useState } from "react";
import { useDispatch } from "react-redux";

// LIBRARY

// REDUX
import { loginUser, createAccount } from "../Redux/actions";

// JAVASCRIP
import validation from "../Utils/validation";

// STYLESHEET'S
import "../StyleSheets/Form.css";

const Form = ({ login, signUp }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [userOption, setUserOption] = useState("Check In");

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
    if (optionButton === "login") {
      event.preventDefault();
      dispatch(loginUser(userData));
    } else if (optionButton === "checkIn") {
      event.preventDefault();
      dispatch(createAccount(userData));
    }
  };
  return (
    <form className="form-component">
      <img
        className="logo"
        src={require(`../image/Rick-And-Morty.png`)}
        alt="Login Rick"
      />
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
        maxLength="10"
      />
      {/* {errors.password && <p className="error">{errors.password}</p>} */}
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className={`toggle-password-button ${
          showPassword ? "show-password" : "hide-password"
        }`}
      >
        {showPassword ? "Disguise" : "Show"} password
      </button>

      {userOption === "Check In" ? (
        <button className="btn-envio" name="login" onClick={handleSubmit}>
          Login
        </button>
      ) : (
        <button className="btn-registro" name="checkIn" onClick={handleSubmit}>
          Create new account
        </button>
      )}
      <p className="text-option" onClick={handleOption}>
        {userOption}
      </p>
    </form>
  );
};

export default Form;
