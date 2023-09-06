const axios = require("axios");
const URL = `https://rickandmortyapi.com/api/character`;

const getCharacter = async (dataType, id) => {
  if (dataType === "number") {
    if (+id < 867) {
      const charcterApi = (await axios.get(`${URL}/${+id}`)).data;
      const obj = {
        id: charcterApi.id,
        name: charcterApi.name,
        gender: charcterApi.gender,
        species: charcterApi.species,
        origin: charcterApi.origin,
        image: charcterApi.image,
        status: charcterApi.status,
      };
      return obj;
    }
    throw Error(`La API solo cuenta con 826 personajes`);
  } else {
    // OJO ESTO VEREMOS EN EL FRONT
    const charcterApi = (await axios.get(`${URL}/?name=${id}`)).data.results;
    const obj = charcterApi.map(
      ({ id, name, gender, species, origin, image, status }) => {
        return {
          id,
          name,
          gender,
          species,
          origin,
          image,
          status,
        };
      }
    );
    return obj;
  }
};

module.exports = {
  getCharacter,
};
