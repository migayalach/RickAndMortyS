import axios from "axios";
import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER_CARDS,
  ORDER_CARDS,
  GET_CHARACTERS,
} from "./action-types";

const URL = `https://rickandmortyapi.com/api/character`;

export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/favorite";
  return async (dispatch) => {
    try {
      const responseRoute = (await axios.post(endpoint, character)).data;
      dispatch({
        type: ADD_FAV,
        payload: responseRoute,
      });
    } catch (error) {
      alert("Error al agregar a favoritos: " + error.message);
    }
  };
};

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/favorite/" + id;
  return async (dispatch) => {
    try {
      const responseRoute = (await axios.delete(endpoint)).data;
      return dispatch({
        type: REMOVE_FAV,
        payload: responseRoute,
      });
    } catch (error) {
      alert("Error al eliminar de favoritos: " + error.message);
    }
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

// BACK-END
// const URL_NAME= `https://rickandmortyapi.com/api/character/?name=Cool%20Rick`;
