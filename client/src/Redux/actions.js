import axios from "axios";
import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER_CARDS,
  ORDER_CARDS,
  GET_CHARACTERS,
} from "./action-types";

const URL = `https://rickandmortyapi.com/api/character`;

// export const addFav = (personaje) => {
//   return {
//     type: ADD_FAV,
//     payload: personaje,
//   };
// };

export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/favorite";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    });
  };
};

// export const removeFav = (id) => {
//   return {
//     type: REMOVE_FAV,
//     payload: id,
//   };
// };
export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/favorite/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER_CARDS,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER_CARDS,
    payload: order,
  };
};

export const getCharacters = () => {
  return async function (dispatch) {
    const apiData = await axios.get(`${URL}`);
    //SIN PAGINACION
    const characters = apiData.data.results;
    dispatch({
      type: GET_CHARACTERS,
      payload: characters,
    });
  };
};

// const URL_CHARACTER = `https://rickandmortyapi.com/api/character/`;
// BACK-END
// const URL_NAME= `https://rickandmortyapi.com/api/character/?name=Cool%20Rick`;
