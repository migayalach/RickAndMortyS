const SUCCESS = 200;
const ERROR = 400;
const {
  getCharacter,
  getNameCharacter,
  getAllCharacter,
} = require("../Controllers/charactersControllers");

const getCharacterHandler = async (request, response) => {
  const { id } = request.params;
  const dataType = isNaN(+id) ? "string" : "number";
  try {
    const characterData = await getCharacter(dataType, id);
    response.status(SUCCESS).json({ character: true, characterData });
  } catch (error) {
    response.status(ERROR).json({ character: false, error: error.message });
  }
};

const getNameCharacterHandler = async (request, response) => {
  const { name } = request.query;
  try {
    const characterData = name
      ? await getNameCharacter(name)
      : await getAllCharacter();
    response.status(SUCCESS).json({ character: true, characterData });
  } catch (error) {
    response.status(ERROR).json({
      character: false,
      message: `No se encontro nada con el nombre buscado`,
      error: error.message,
    });
  }
};

module.exports = {
  getCharacterHandler,
  getNameCharacterHandler,
};
