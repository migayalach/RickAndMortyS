const SUCCESS = 200;
const ERROR = 400;
const {
  postUser,
  getIdUser,
  getUserName,
  getAllUser,
  putUser,
  userDetele,
} = require("../Controllers/userControllers");

const createUser = async (request, response) => {
  const { email, password, idLevel } = request.body;
  try {
    const newUser = await postUser({ email, password, idLevel });
    response.status(SUCCESS).json({ createUser: true, newUser });
  } catch (error) {
    response.status(ERROR).json({ createUser: false, error: error.message });
  }
};

const getUserId = async (request, response) => {
  const { idUser } = request.params;
  try {
    const dataResponse = await getIdUser(+idUser);
    response.status(SUCCESS).json({ getUserId: true, dataResponse });
  } catch (error) {
    response.status(ERROR).json({
      getUserId: false,
      error: error.message,
    });
  }
};

const getNameUser = async (request, response) => {
  const { email } = request.query;
  try {
    const dataResponse = email ? await getUserName(email) : await getAllUser();
    response.status(SUCCESS).json({ getNameUser: true, dataResponse });
  } catch (error) {
    response.status(ERROR).json({ getNameUser: false, error: error.message });
  }
};

const updateUser = async (request, response) => {
  const { idUser, idLevel, email, password } = request.body;
  try {
    const userUpdate = await putUser(idUser, idLevel, email, password);
    response.status(SUCCESS).json({
      updateUser: true,
      message: "Usuaro actualizado con exito",
      userUpdate,
    });
  } catch (error) {
    response.status(ERROR).json({ updateUser: false, error: error.message });
  }
};

const deleteUser = async (request, response) => {
  const { idUser } = request.params;
  try {
    const responseData = await userDetele(idUser);
    response.status(SUCCESS).json({
      message: "Usuaro eliminado con exito",
      deleteUser: true,
      responseData,
    });
  } catch (error) {
    response.status(ERROR).json({ deleteUser: false, error: error.message });
  }
};

module.exports = {
  createUser,
  getUserId,
  getNameUser,
  updateUser,
  deleteUser,
};
