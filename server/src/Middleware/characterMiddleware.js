const characterId = (request, response, next) => {
  const { id, idUser } = request.params;
  try {
    if (!Number.isInteger(+id || +idUser)) {
      throw Error`El tipo de dato que introdujo no es valido`;
    }
    return next();
  } catch (error) {
    return response
      .status(400)
      .json({ searchPerson: false, error: error.message });
  }
};

module.exports = {
  characterId,
};
