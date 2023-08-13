const { User, Favorite, UserFavorite } = require("../DataBase/dataBase");

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

//no debe haber repetidos
const getFavorites = async (id) => {
  const favorites = await User.findOne({
    where: { id },
    include: {
      model: Favorite,
    },
  });
  // return (favorites.Favorites);
  return clearFavorites(favorites.Favorites);
};

const postFavorites = async ({
  id,
  name,
  origin,
  status,
  image,
  species,
  gender,
  idUser,
}) => {
  const user = await User.findOne({
    where: { id: idUser },
  });

  if (!user) {
    throw Error("El usuario no se pudo encontrar");
  }

  const createFavorite = await Favorite.create({
    idPerson: id,
    name,
    origin,
    status,
    image,
    species,
    gender,
  });

  const idUs = user.dataValues.id;
  // console.log(idUs);
  await createFavorite.addUser(idUs);
  return [createFavorite];
};

//si no existe el elemento aca devolver error
const deleteFav = async (id) => {
  if (id) {
    const dataFavorite = await Favorite.findByPk(id, {
      attributes: ["idPerson"],
    });
    const idPerson = dataFavorite.dataValues.idPerson;
  }
  const deleteFavorite = await Favorite.findByPk(id);
  if (!deleteFavorite) {
    throw Error(`No se encontro el personaje`);
  }
  await deleteFavorite.destroy();
  return await getFavorites();
};

module.exports = { postFavorites, deleteFav, getFavorites };
