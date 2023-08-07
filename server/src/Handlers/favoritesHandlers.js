const SUCCESS = 200;
const ERROR = 500;
const {
  postFavorites,
  deleteFav,
  getFavorites,
} = require("../Controllers/favoritesControllers");

const postFavHandlers = async (request, response) => {
  const { id, name, origin, status, image, species, gender } = request.body;
  try {
    const responseData = await postFavorites({
      id,
      name,
      origin,
      status,
      image,
      species,
      gender,
    });
    response.status(SUCCESS).json(responseData);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteFavHandlers = async (request, response) => {
  const { id } = request.params;
  try {
    const actionResponse = await deleteFav(id);
    response.status(SUCCESS).json(actionResponse);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const allFavorites = async (request, response) => {
  try {
    const favorites = await getFavorites();
    response.status(SUCCESS).json(favorites);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};
module.exports = { postFavHandlers, deleteFavHandlers, allFavorites };
