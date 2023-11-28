const clearResponse = require("../Utils/charactersUtils");
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
      return [obj];
    }
    throw Error(`La API solo cuenta con 826 personajes`);
  }
};

const getNameCharacter = async (name) =>
  clearResponse((await axios.get(`${URL}/?name=${name}`)).data.results);

const getAllCharacter = async () => (await axios.get(`${URL}`)).data.results;

module.exports = {
  getCharacter,
  getNameCharacter,
  getAllCharacter,
};
