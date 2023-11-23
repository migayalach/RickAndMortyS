const { User, Level } = require("../DataBase/dataBase");
const { Op } = require("sequelize");
const bcrypt = require("bcrypt");

const hashedPassword = async (password) => await bcrypt.hash(password, 10);

const postUser = async ({ email, password, idLevel }) => {
  const existLevel = await Level.findByPk(idLevel);
  if (!existLevel) {
    throw Error`El nivel que intenta asignar no se encuentra registrado`;
  }
  const user = await User.findOne({ where: { email } });
  if (!user) {
    const createUser = await User.create({
      email,
      password: await hashedPassword(`${password}`),
    });
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

const putUser = async (idUser, idLevel, email, password) => {
  const updateUser = await User.findOne({ where: { id: idUser } });
  if (!updateUser) {
    throw Error(`El email: ${email}, no se encuentra registrado`);
  }
  if (!(await Level.findOne({ where: { idLevel } }))) {
    throw Error`El nivel no se encuentra registrado`;
  }
  await User.update(
    { email, password, LevelIdLevel: idLevel },
    { where: { id: idUser } }
  );
  const infoUser = await getIdUser(idUser);
  const getUserAll = await getAllUser();
  return { infoUser, getUserAll };
};

const userDetele = async (idUser) => {
  const userData = await User.findOne({ where: { id: idUser } });
  if (!userData) {
    throw Error(`El email: ${email}, no se encuentra registrado`);
  }
  await User.destroy({ where: { id: idUser } });
  return await getAllUser();
};

module.exports = {
  postUser,
  getIdUser,
  getUserName,
  getAllUser,
  putUser,
  userDetele,
};
