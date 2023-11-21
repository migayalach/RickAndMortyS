const characterId = (request, response, next) => {
  const { id } = request.params;
  try {
    if (!Number.isInteger(+id)) {
      throw Error`solo numeros`;
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
