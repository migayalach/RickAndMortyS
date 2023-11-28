const { User, Favorite, UserFavorites } = require("../DataBase/dataBase");
const { getUserName } = require("./userControllers");
const { orderFuc, filterCards } = require("../Utils/toolsFunctions");

//no debe haber repetidos
const getFavorites = async (id) => {
  const user = await User.findOne({ where: { id } });
  if (!user) {
    throw Error(`Este usuario no se encuentra registrado`);
  }
  const favorites = await User.findAll({
    where: { id },
    include: {
      model: Favorite,
    },
  });
  if (favorites) {
    return favorites[0].Favorites;
  }
  throw Error`No se encontro ningun dato`;
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
  await createFavorite.addUser(idUs);
  return await getFavorites(idUser);
};

const deleteFav = async (idUser, id) => {
  const existUser = await User.findOne({ where: { id: idUser } });
  if (!existUser) {
    throw Error(`Este usuario no existe`);
  }

  const [Favorites] = await User.findAll({
    where: { id: idUser },
    include: { model: Favorite, where: { idPerson: id }, attributes: ["id"] },
  });
  
  if (!Favorites) {
    throw Error(`El personaje que desea eliminar no se encuentra registrado`);
  }

  const FavoriteId = Favorites.Favorites[0].id;
  
  await UserFavorites.destroy({
    where: {
      FavoriteId,
      UserId: idUser,
    },
  });

  await Favorite.destroy({
    where: {
      id: FavoriteId,
    },
  });

  return await getFavorites(idUser);
};

const orderCardsFavorites = async (email, order, gender) => {
  const [dataUser] = await getUserName(email);
  const cardsUser = await getFavorites(dataUser.id);
  if (order && gender) {
    const dataCards = filterCards(cardsUser, gender);
    if (!dataCards.length) {
      throw Error(`No se encontro el genero: ${gender}, buscado`);
    }
    return orderFuc(dataCards, order, "name");
  } else if (email && gender === "All") {
    return cardsUser;
  } else if (order) {
    return orderFuc(cardsUser, order, "name");
  } else if (gender) {
    const dataCards = filterCards(cardsUser, gender);
    if (!dataCards.length) {
      throw Error(`No se encontro el genero: ${gender}, buscado`);
    }
    return dataCards;
  }
};

module.exports = {
  postFavorites,
  deleteFav,
  getFavorites,
  orderCardsFavorites,
};
