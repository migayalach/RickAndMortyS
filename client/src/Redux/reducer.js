import {
  LOGIN_USER,
  CREATE_USER,
  CHARACTER,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ALL_FAVORITE,
  REMOVE_CHARACTER,
  FILTER_CARDS,
  AUX_STATE,
  ERROR_STATE,
} from "./action-types";

const initialState = {
  myFavorites: [],
  characters: [],
  aux: [],
  infoUser: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      return {
        ...state,
        infoUser: payload.loginUser,
      };

    case CREATE_USER:
      return {
        ...state,
        infoUser: payload.loginUser,
        aux: [],
      };

    case CHARACTER:
      return {
        ...state,
        characters: [...state.characters, ...payload],
        aux: [],
      };

    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: payload,
        aux: [],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: payload,
        aux: [],
      };

    case ALL_FAVORITE:
      return {
        ...state,
        myFavorites: payload,
        aux: [],
      };

    case REMOVE_CHARACTER:
      return {
        ...state,
        characters: payload,
        aux: [],
      };

    case FILTER_CARDS:
      return {
        ...state,
        myFavorites: payload.orderCards,
        aux: [],
      };

    case AUX_STATE:
      return {
        ...state,
        aux: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
