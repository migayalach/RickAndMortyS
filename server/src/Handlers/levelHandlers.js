const {
  postLevel,
  getIdLevel,
  getLevelName,
  getAllLevel,
  putLevel,
  levelDelete,
} = require("../Controllers/levelControllers");
const SUCCESS = 200;
const ERROR = 400;

const createLevel = async (request, response) => {
  const { level } = request.body;
  try {
    const newLevel = await postLevel(level);
    response.status(SUCCESS).json({
      createLevel: true,
      message: `Nivel: ${level}, creado con exito`,
      newLevel,
    });
  } catch (error) {
    response.status(ERROR).json({ createLevel: false, error: error.message });
  }
};

const getLevelId = async (request, response) => {
  const { idLevel } = request.params;
  try {
    const searchIdLevel = await getIdLevel(idLevel);
    response.status(SUCCESS).json({ getLevelId: true, searchIdLevel });
  } catch (error) {
    response.status(ERROR).json({ getLevelId: false, error: error.message });
  }
};

const getNameLevel = async (request, response) => {
  const { level } = request.query;
  try {
    const getData = level ? await getLevelName(level) : await getAllLevel();
    response.status(SUCCESS).json({ getLevel: true, getData });
  } catch (error) {
    response.status(ERROR).json({ getLevel: false, error: error.message });
  }
};

const editLevel = async (request, response) => {
  const { idLevel, level } = request.body;
  try {
    const levelput = await putLevel(idLevel, level);
    response.status(SUCCESS).json({ editLevel: true, levelput });
  } catch (error) {
    response.status(ERROR).json({ editLevel: false, error: error.message });
  }
};

const deleteLevel = async (request, response) => {
  const { idLevel } = request.params;
  try {
    const delLevel = await levelDelete(idLevel);
    response.status(SUCCESS).json({
      deleteLevel: true,
      message: `Nivel eliminado con exito`,
      delLevel,
    });
  } catch (error) {
    response.status(ERROR).json({
      deleteLevel: false,
      error: error.message,
    });
  }
};

module.exports = {
  createLevel,
  getLevelId,
  getNameLevel,
  editLevel,
  deleteLevel,
};
