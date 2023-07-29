import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER_CARDS,
  ORDER_CARDS,
  GET_CHARACTERS,
} from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.allCharacters, payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(({ id }) => id !== +payload),
      };

    case FILTER_CARDS:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          ({ gender }) => gender === payload
        ),
      };

    // case ORDER_CARDS:
    //   const allCharactersCopy = [...state.allCharacters];
    //   return {
    //     ...state,
    //     myFavorites:
    //       payload === "A"
    //         ? allCharactersCopy.sort((a, b) => a.id < b.id)
    //         : allCharactersCopy.sort((a, b) => a.id > b.id),
    //   };

    case ORDER_CARDS:
      const allCharactersCopy = [...state.allCharacters];
      return {
        ...state,
        myFavorites: order(allCharactersCopy, payload),
      };

    case GET_CHARACTERS:
      return {
        ...state,
        myFavorites: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;

const order = (arr, str) => {
  if (str === "A") {
    return arr.sort();
  }
  if (str === "D") {
    return arr.sort().reverse();
  }
};
