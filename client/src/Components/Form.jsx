import { useState } from "react";
import validation from "../Utils/validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

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
    event.preventDefault();
    login(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">EMAIL:</label>
      <input
        type="text"
        value={userData.email}
        name="email"
        onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}
      <label htmlFor="password">PASSWORD</label>
      <input
        type="text"
        value={userData.password}
        name="password"
        onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}
      <button>SUBMIT</button>
    </form>
  );
};

export default Form;
