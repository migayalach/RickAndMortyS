// HOOK´S
import { useState } from "react";
import validation from "../Utils/validation";
import "../StyleSheets/Form.css";

const Form = ({ login, signUp }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [userOption, setUserOption] = useState("Login");

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
      login(userData);
    } else {
      signUp(userData);
      event.preventDefault();
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
        type="password"
        value={userData.password}
        name="password"
        onChange={handleChange}
        placeholder="*************"
        required
        maxLength="10"
      />
      {errors.password && <p className="error">{errors.password}</p>}
      {userOption === "Check In" ? (
        <button className="btn-envio" name="login" onClick={handleSubmit}>
          {" "}
          Login{" "}
        </button>
      ) : (
        <button className="btn-registro" name="checkIn" onClick={handleSubmit}>
          {" "}
          Check in{" "}
        </button>
      )}
      <p className="text-option" onClick={handleOption}>
        {userOption}
      </p>
    </form>
  );
};

export default Form;
