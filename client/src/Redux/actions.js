import axios from "axios";
import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER_CARDS,
  ORDER_CARDS,
  GET_CHARACTERS,
  GET_ALL_FAVORITES,
  GET_NAME_CHARACTER,
  LOGIN_USER,
  CREATE_USER,
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

export const removeFav = (idUser, id) => {
  const endpoint = `http://localhost:3001/rickandmorty/favorite/${idUser}/${id}`;
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

export const allFavorites = (idUser) => {
  const enpoint = `http://localhost:3001/rickandmorty/favorite/${idUser}`;
  return async (dispatch) => {
    try {
      const responseGet = (await axios.get(enpoint)).data;
      return dispatch({
        type: GET_ALL_FAVORITES,
        payload: responseGet,
      });
    } catch (error) {
      return { error: error.message };
    }
  };
};

export const filterCards = ({ email, order, gender }) => {
  const URL = `http://localhost:3001/rickandmorty/favorite`;
  return async function (dispatch) {
    try {
      const responseRoute = (
        await axios.get(`${URL}?email=${email}&order=${order}&gender=${gender}`)
      ).data;
      dispatch({
        type: FILTER_CARDS,
        payload: responseRoute,
      });
    } catch (error) {}
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

export const getNameCharacter = (id) => {
  return async function (dispatch) {
    const URL_CHARACTER = `http://localhost:3001/rickandmorty/characters`;
    const charactersSearch = (await axios.get(`${URL_CHARACTER}?name=${id}`))
      .data;
    dispatch({
      type: GET_NAME_CHARACTER,
      payload: charactersSearch,
    });
  };
};

export const loginUser = (userData) => {
  return async function (dispatch) {
    try {
      const URL = "http://localhost:3001/rickandmorty/login";
      dispatch({
        type: LOGIN_USER,
        payload: (await axios.post(`${URL}`, userData)).data,
      });
    } catch (error) {}
  };
};

export const createAccount = (userData) => {
  return async function (dispatch) {
    try {
      const URL = "http://localhost:3001/rickandmorty/user";
      dispatch({
        type: CREATE_USER,
        payload: (await axios.post(`${URL}`, userData)).data,
      });
    } catch (error) {}
  };
};
