module.exports = clearResponse = (charcterApi) =>
  charcterApi.map(({ id, name, gender, species, origin, image, status }) => {
    return {
      id,
      name,
      gender,
      species,
      origin,
      image,
      status,
    };
  });