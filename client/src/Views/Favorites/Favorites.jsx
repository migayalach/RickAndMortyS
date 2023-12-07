// COMPONENTS
import Cards from "../../Components/Cards";
import Filter from "../../Components/Filter";

// HOOK'S
import { useSelector } from "react-redux";

// REDUX

// LIBRARY

// CSS

// JAVASCRIP

const Favorites = ({ idUser, user }) => {
  const selectFavorite = useSelector((state) => state.myFavorites);

  return (
    <>
      <h1>Favorites</h1>
      {selectFavorite.length ? <Filter user={user} /> : null}
      <Cards characters={selectFavorite} idUser={idUser} />
    </>
  );
};

export default Favorites;
