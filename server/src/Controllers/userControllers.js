const { User, Level } = require("../DataBase/dataBase");
const { Op } = require("sequelize");

const postUser = async ({ email, password, idLevel }) => {
  const existLevel = await Level.findByPk(idLevel);
  if (!existLevel) {
    throw Error`El nivel que intenta asignar no se encuentra registrado`;
  }
  const user = await User.findOne({ where: { email } });
  if (!user) {
    const createUser = await User.create({ email, password });
    await createUser.setLevel(existLevel);
    return { create: true };
  }
  throw Error(`El email: ${email} ya se encuentra registrado`);
};

const getIdUser = async (idUser) => {
  const existUser = await User.findOne({ where: { id: idUser } });
  if (!existUser) {
    throw Error(`No se pudo encontrar ningun usuario`);
  }
  const {
    id,
    email,
    Level: { idLevel, level },
  } = await User.findOne({
    where: { id: idUser },
    include: {
      model: Level,
    },
  });
  return { id, idLevel, email, level };
};

const getUserName = async (email) => {
  const userData = await User.findAll({
    where: { email: { [Op.iLike]: `%${email}%` } },
    include: { model: Level },
  });
  if (userData.length) {
    return userData.map(({ id, email, Level: { idLevel, level } }) => ({
      id,
      idLevel,
      email,
      level,
    }));
  }
  throw Error(`El email: ${email} no existe`);
};

const getAllUser = async () => {
  const usersData = await User.findAll({ include: { model: Level } });
  if (usersData.length) {
    return usersData.map(({ id, email, Level: { idLevel, level } }) => ({
      id,
      idLevel,
      level,
      email,
    }));
  }
  throw Error(`No hay datos disponibles`);
};

const putUser = async (idUser, email, password) => {
  const updateUser = await User.findOne({ where: { id: idUser } });
  if (!updateUser) {
    throw Error(`El email: ${email}, no se encuentra registrado`);
  }
  await User.update({ email, password }, { where: { id: idUser } });
  return await getIdUser(idUser);
};

const userDetele = async (idUser) => {
  const userData = await User.findOne({ where: { id: idUser } });
  if (!userData) {
    throw Error(`El email: ${email}, no se encuentra registrado`);
  }
  await User.destroy({ where: { id: idUser } });
  return await getAllUser();
};

const getLogin = async ({ email, password }) => {
  if (!email || !password) {
    throw Error(`Faltan datos`);
  }
  if (await User.findOne({ where: { email } })) {
    if (await User.findOne({ where: { password } })) {
      return { access: true };
    }
    throw Error(`La constraseña: ${password} es incorrecta`);
  }
  throw Error(`El email: ${email} no se lo pudo encontrar`);
};

const searchInfo = async ({ email }) => {
  const result = await User.findOne({
    attributes: ["id"],
    where: {
      email,
    },
  });
  if (!result) {
    throw Error(`Este usuario no existe`);
  }
  return { infoUser: result.id };
};

module.exports = {
  postUser,
  getIdUser,
  getUserName,
  getAllUser,
  getLogin,
  putUser,
  userDetele,
  searchInfo,
};
