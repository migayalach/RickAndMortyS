import { ADD_FAV, REMOVE_FAV, RESET_FAV } from "./action-types";

const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(({ id }) => id !== +payload),
      };

    case REMOVE_FAV: 
      return {
      }

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
