import { NavLink } from "react-router-dom";
import "../StyleSheets/SubMenu.css"
import "../StyleSheets/SearchBar.css"

const SubMenu = () => {
  return (
    <div>
      <button className="aceptar">
        <NavLink className="navLink" to="/about">About</NavLink>
      </button>
      <button className="aceptar">
        <NavLink className="navLink" to="/home">Home</NavLink>
      </button>
      <button className="aceptar">
        <NavLink className="navLink" to="/favorites">Favoritos</NavLink>
      </button>
    </div>
  );
};

export default SubMenu;
