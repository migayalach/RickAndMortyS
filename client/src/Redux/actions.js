import { ADD_FAV, REMOVE_FAV } from "./action-types";

export const addFav = (personaje) => {
  console.log("llege");
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
