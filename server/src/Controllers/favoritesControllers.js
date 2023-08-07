const { User, Favorite } = require("../DataBase/dataBase");

//no debe haber repetidos
const getFavorites = async () => {
  const favorites = await Favorite.findAll();
  return favorites;
};

const postFavorites = async ({
  name,
  origin,
  status,
  image,
  species,
  gender,
}) => {
  const user = await User.findOne({
    attribute: ["idUser"],
  });
  const idUser = user.dataValues.id;
  const createFavorite = await Favorite.create({
    name,
    origin,
    status,
    image,
    species,
    gender,
  });
  await createFavorite.addUser(idUser);
  return [createFavorite];
};

//si no existe el elemento aca devolver error
const deleteFav = async (id) => {
  const deleteFavorite = await Favorite.findByPk(id);
  if (!deleteFavorite) {
    throw Error(`No se encontro el personaje`);
  }
  await deleteFavorite.destroy();
  return await getFavorites();
};

module.exports = { postFavorites, deleteFav, getFavorites };
