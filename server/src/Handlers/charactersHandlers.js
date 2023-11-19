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
    const character = await getCharacter(dataType, id);
    response.status(SUCCESS).json(character);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getNameCharacterHandler = async (request, response) => {
  const { name } = request.query;
  try {
    const characterName = name
      ? await getNameCharacter(name)
      : await getAllCharacter();
    response.status(SUCCESS).json(characterName);
  } catch (error) {
    response
      .status(ERROR)
      .json({
        character: false,
        message: `No se encontro nada con el nombre buscado: ${name}`,
        error: error.message,
      });
  }
};

module.exports = {
  getCharacterHandler,
  getNameCharacterHandler,
};
