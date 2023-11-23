const { Op } = require("sequelize");
const { Level } = require("../DataBase/dataBase");

const postLevel = async (level) => {
  const newLevel = await Level.findOne({ where: { level } });
  if (newLevel) {
    throw Error`Este nivel de acceso ya existe`;
  }
  await Level.create({ level });
  return await getAllLevel();
};
const getIdLevel = async (idLevel) => {
  const searchIdLevel = await Level.findOne({
    attibutes: ["level"],
    where: { idLevel },
  });
  if (!searchIdLevel) {
    throw Error`No se pudo encontrar lo que busca`;
  }
  return searchIdLevel;
};

const getLevelName = async (level) => {
  const searchLevel = await Level.findAll({
    where: {
      level: {
        [Op.iLike]: `%${level}%`,
      },
    },
  });
  if (!searchLevel.length) {
    throw Error`No se encontro nada para mostrar`;
  }
  return searchLevel;
};

const getAllLevel = async () => {
  const getLevel = await Level.findAll();
  if (!getLevel) {
    throw Error`No hay registros para mostrar`;
  }
  return getLevel;
};

const putLevel = async (idLevel, level) => {
  const infoLevel = await Level.findOne({ where: { idLevel } });
  if (!infoLevel) {
    throw Error`El nivel: ${level} que intenda modificar no existe`;
  }
  await Level.update({ idLevel, level }, { where: { idLevel } });
  return await getIdLevel(idLevel);
};

const levelDelete = async (idLevel) => {
  const infoLevel = await Level.findOne({ where: { idLevel } });
  if (!infoLevel) {
    throw Error`El nivel que intenda eliminar no existe`;
  }
  await Level.destroy({ where: { idLevel } });
  return await getAllLevel();
};

module.exports = {
  postLevel,
  getIdLevel,
  getLevelName,
  getAllLevel,
  putLevel,
  levelDelete,
};
