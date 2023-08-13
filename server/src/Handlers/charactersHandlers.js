const SUCCESS = 200;
const ERROR = 400;
const { getCharacter } = require("../Controllers/charactersControllers");

const getCharacterHandler = async (request, response) => {
  const { id } = request.params;
  try {
    const character = await getCharacter(+id);
    response.status(SUCCESS).json(character);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  getCharacterHandler,
};