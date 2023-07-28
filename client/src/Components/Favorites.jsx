import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFav } from "../Redux/actions";
import "../StyleSheets/Card.css";

const Favorites = () => {
  const recipe = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleFavorite = (event) => {
    const id = event.target.name;
    dispatch(removeFav(id));
  };

  return (
    <div>
      <h1>Favoritos</h1>
      {recipe?.map(({ id, name, species, gender, image }) => {
        return (
          <div className="card-container" key={id}>
            <button name={id} onClick={handleFavorite}> ❤️ </button>
            <div>
              <Link to={`/detail/${id}`}>
                <h2 className="nombre">{name}</h2>
              </Link>
              <img className="imagen" src={image} alt={name} />
              <div className="pie-de-pagina">
                <h2 className="datos">{species}</h2>
                <h2 className="datos">{gender}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
