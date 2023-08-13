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
  console.log(id);
  const deleteFavorite = await Favorite.findByPk(id, {
    attributes: ["idPerson"],
    include: [
      {
        model: User,
        attributes: ["id"],
      },
    ],
  });
  if (deleteFavorite) {
    const idUser = deleteFavorite.dataValues.Users[0].dataValues.id;
    await UserFavorite.destroy({
      where: {
        FavoriteId: id,
      },
    });
    
    await Favorite.destroy({
      where: {
        id,
      },
    });

    return await getFavorites(idUser);
  }
  throw Error`El personaje: ${id}, no se encuentra registrado`;
};

module.exports = { postFavorites, deleteFav, getFavorites };
