import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER_CARDS,
  ORDER_CARDS,
  GET_CHARACTERS,
  GET_ALL_FAVORITES,
  ID_USER,
  GET_NAME_CHARACTER,
} from "./action-types";

import order from "../Functions/reducerClear";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  aux: [],
  infoUser: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        myFavorites: payload,
        aux: state.myFavorites,
      };

    case GET_ALL_FAVORITES:
      return {
        ...state,
        myFavorites: payload,
      };

    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

    case REMOVE_FAV:
      return { ...state, myFavorites: payload };

    case FILTER_CARDS:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          ({ gender }) => gender === payload
        ),
      };

    case ORDER_CARDS:
      const allCharactersCopy = [...state.allCharacters];
      return {
        ...state,
        myFavorites: order(allCharactersCopy, payload),
      };

    case GET_NAME_CHARACTER:
      return {
        ...state,
        myFavorites: payload,
        aux: state.myFavorites,
      };

    case ID_USER:
      return {
        ...state,
        infoUser: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
