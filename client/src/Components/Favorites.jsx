import { useSelector } from "react-redux";
import Card from "./Card";

const Favorites = () => {
  const recipe = useSelector((state) => state.myFavorites);
  return (
    <div>
      <h1>Favoritos</h1>
      {recipe?.map((favoritos) => {
        return (
          <Card
            key={favoritos.id}
            id={favoritos.id}
            name={favoritos.name}
            species={favoritos.species}
            gender={favoritos.gender}
            image={favoritos.image}
            onClose={favoritos.onClose}
          />
        );
      })}
    </div>
  );
};

export default Favorites;
