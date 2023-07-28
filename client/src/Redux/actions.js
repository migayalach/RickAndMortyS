import axios from "axios";
import { ADD_FAV, REMOVE_FAV, GET_CHARACTER } from "./action-types";

const URL_CHARACTER = `https://rickandmortyapi.com/api/character/`;
// BACK-END
// const URL_NAME= `https://rickandmortyapi.com/api/character/?name=Cool%20Rick`;

export const addFav = (personaje) => {
  return {
    type: ADD_FAV,
    payload: personaje,
  };
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};
