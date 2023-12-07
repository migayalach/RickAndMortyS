// COMPONENTS
import Cards from "../../Components/Cards";
import Filter from "../../Components/Filter";

// HOOK'S
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// REDUX
import { allFavorite, auxState } from "../../Redux/actions";

// LIBRARY

// CSS

// JAVASCRIP
import orderFuc from "../../Utils/toolsFunction";
import { messageUpdateAlert } from "../../Utils/toolsFunction";

const Home = ({ user, idUser }) => {
  const dispatch = useDispatch();
  // creacion de estados locales
  const [data, setData] = useState([]);
  const [value, setValue] = useState(false);

  // Se obtiene el estado global de redux
  const selectChatacters = useSelector((state) => state.characters);
  const selectMyFavorites = useSelector((state) => state.myFavorites);
  const selectAux = useSelector((state) => state.aux);

  // accion que recive dos parametros, para poder pasarlos a 'orderfuc'
  const orderCharacters = (order, gender) => {
    const { isUpdate, array } =
      gender === "All" && !order
        ? orderFuc(selectChatacters, order, (gender = "All"), "name")
        : orderFuc(selectChatacters, order, gender, "name");
    setData(array);
    setValue(isUpdate);
    dispatch(auxState(array));
  };

  // manejo de ciclos de vida de la vista
  useEffect(() => {
    !selectMyFavorites.length && dispatch(allFavorite(idUser));
  }, [selectChatacters]);

  useEffect(() => {
    setData(selectChatacters);
  }, [selectChatacters]);

  useEffect(() => {
    setValue(false);
  }, [value]);

  return (
    <>
      <h1>Wellcome {user}</h1>
      {selectChatacters.length ? (
        <Filter characters={data} orderCharacters={orderCharacters} />
      ) : null}
      <Cards characters={data} idUser={idUser} flag="home" />
    </>
  );
};

export default Home;
