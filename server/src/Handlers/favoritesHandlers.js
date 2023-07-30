const SUCCESS = 200;
const ERROR = 400;
const {
  postFavorites,
  deleteFav,
} = require("../Controllers/favoritesControllers");

const postFavHandlers = async (request, response) => {
  const { id, name, gender, origin, image, status } = request.body;
  try {
    const responseData = await postFavorites({
      id,
      name,
      gender,
      origin,
      image,
      status,
    });
    response.status(SUCCESS).json(responseData);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const deleteFavHandlers = async (request, response) => {
  const { id } = request.params;
  try {
    const actionResponse = await deleteFav(+id);
    response.status(SUCCESS).json(actionResponse);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = { postFavHandlers, deleteFavHandlers };
