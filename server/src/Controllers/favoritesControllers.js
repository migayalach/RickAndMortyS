let { myFavorites } = require("../Utils/myFavorites");

//no debe haber repetidos
const postFavorites = ({ id, name, gender, origin, image, status }) => {
  let character = { id, name, gender, origin, image, status };
  myFavorites.push(character);
  return myFavorites;
};

//si no existe el elemento aca devolver error
const deleteFav = (id) => {
  const newArray = myFavorites.filter((element) => element.id !== id);
  return (myFavorites = newArray);
};

module.exports = { postFavorites, deleteFav };
