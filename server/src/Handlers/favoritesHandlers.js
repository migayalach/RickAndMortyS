const SUCCESS = 200;
const ERROR = 500;
const {
  postFavorites,
  deleteFav,
  getFavorites,
  orderCardsFavorites,
} = require("../Controllers/favoritesControllers");

const postFavHandlers = async (request, response) => {
  const { id, name, origin, status, image, species, gender, idUser } =
    request.body;
  try {
    const responseData = await postFavorites({
      id,
      name,
      origin,
      status,
      image,
      species,
      gender,
      idUser,
    });
    response.status(SUCCESS).json(responseData);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteFavHandlers = async (request, response) => {
  const { idUser, id } = request.params;
  try {
    const actionResponse = await deleteFav(idUser, id);
    response.status(SUCCESS).json(actionResponse);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const allFavorites = async (request, response) => {
  const { id } = request.params;
  try {
    const favorites = await getFavorites(id);
    response.status(SUCCESS).json(favorites);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const orderFavorites = async (request, response) => {
  try {
    const { email, order, gender } = request.query;
    const orderCards = await orderCardsFavorites(email, order, gender);
    response.status(SUCCESS).json({ orderCards });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const clearFavorites = (arr) =>
  arr.map(
    ({
      id,
      idPerson,
      name,
      status,
      species,
      gender,
      origin,
      image,
      create,
    }) => {
      return {
        id,
        idPerson,
        name,
        status,
        species,
        gender,
        origin,
        image,
        create,
      };
    }
  );

module.exports = {
  postFavHandlers,
  deleteFavHandlers,
  allFavorites,
  orderFavorites,
};
