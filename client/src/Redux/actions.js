import axios from "axios";
import {
  LOGIN_USER,
  CREATE_USER,
  CHARACTER,
  REMOVE_CHARACTER,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ALL_FAVORITE,
  FILTER_CARDS,
  AUX_STATE,
  PUT_DATA_USER,
  SET_DATA_USER,
  ERROR_STATE,
} from "./action-types";

const URL = `http://localhost:3001/rickandmorty`;

export const loginUser = (userData) => {
  return async function (dispatch) {
    try {
      dispatch({
        type: LOGIN_USER,
        payload: (await axios.post(`${URL}/login`, userData)).data,
      });
    } catch (error) {
      dispatch({
        type: ERROR_STATE,
        payload: error.response.data.error,
      });
    }
  };
};

export const createAccount = (userData) => {
  return async function (dispatch) {
    try {
      dispatch({
        type: CREATE_USER,
        payload: (await axios.post(`${URL}/user`, userData)).data,
      });
    } catch (error) {}
  };
};

export const charactersCollection = (data) => {
  return function (dispatch) {
    try {
      dispatch({
        type: CHARACTER,
        payload: data,
      });
    } catch (error) {}
  };
};

export const deleteCharacter = (data) => {
  return function (dispatch) {
    try {
      dispatch({
        type: REMOVE_CHARACTER,
        payload: data,
      });
    } catch (error) {}
  };
};

export const addFav = (data) => {
  return async function (dispatch) {
    try {
      dispatch({
        type: ADD_FAVORITE,
        payload: (await axios.post(`${URL}/favorite`, data)).data,
      });
    } catch (error) {}
  };
};

export const removeFav = (idUser, id) => {
  return async function (dispatch) {
    try {
      dispatch({
        type: REMOVE_FAVORITE,
        payload: (await axios.delete(`${URL}/favorite/${idUser}/${id}`)).data,
      });
    } catch (error) {}
  };
};

export const allFavorite = (data) => {
  return async function (dispatch) {
    try {
      dispatch({
        type: ALL_FAVORITE,
        payload: (await axios.get(`${URL}/favorite/${data}`)).data,
      });
    } catch (error) {}
  };
};

export const filterCards = ({ email, order, gender }) => {
  return async function (dispatch) {
    try {
      const responseRoute = (
        await axios.get(
          `${URL}/favorite?email=${email}&order=${order}&gender=${gender}`
        )
      ).data;
      dispatch({
        type: FILTER_CARDS,
        payload: responseRoute,
      });
    } catch (error) {}
  };
};

export const updateUser = (idUser, idLevel, data) => {
  data = {
    idUser,
    idLevel,
    ...data,
  };
  return async function (dispatch) {
    try {
      dispatch({
        type: PUT_DATA_USER,
        payload: (await axios.put(`${URL}/user`, data)).data,
      });
    } catch (error) {}
  };
};

export const setDataUser = () => {
  return function (dispatch) {
    dispatch({
      type: SET_DATA_USER,
    });
  };
};

export const auxState = (data) => {
  return function (dispatch) {
    try {
      dispatch({
        type: AUX_STATE,
        payload: data,
      });
    } catch (error) {}
  };
};
