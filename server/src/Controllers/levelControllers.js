const { Level } = require("../DataBase/dataBase");

const postLevel = async (level) => {
  const newLevel = await Level.findOne({ where: { level } });
  if (newLevel) {
    throw Error`Este nivel de acceso ya existe`;
  }
  await Level.create({ level });
  return await getAllLevel();
};
const getIdLevel = () => {};
const getLevelName = () => {};

const getAllLevel = async () => {
  const getLevel = await Level.findAll();
  if (!getLevel) {
    throw Error`No hay registros para mostrar`;
  }
  return getLevel;
};

const putLevel = () => {};
const levelDelete = () => {};

module.exports = {
  postLevel,
  getIdLevel,
  getLevelName,
  getAllLevel,
  putLevel,
  levelDelete,
};
