const SUCCESS = 200;
const ERROR = 500;
const {
  postUser,
  getIdUser,
  getUserName,
  getAllUser,
  getLogin,
  putUser,
  userDetele,
  searchInfo,
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

// ADMIN PUEDE VER LA LISTA DE USUARIOS por id, nombre o todo
const getUserId = async (request, response) => {
  const { idUser } = request.params;
  try {
    const dataResponse = await getIdUser(+idUser);
    response.status(SUCCESS).json({ getUserId: true, dataResponse });
  } catch (error) {
    response.status(ERROR).json({
      getUserId: false,
      error: error.message,
      message: "No se pudo encontrar ningun usuario",
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
  const { idUser, email, password } = request.body;
  try {
    const userUpdate = await putUser(idUser, email, password);
    response.status(SUCCESS).json({
      updateUser: true,
      userUpdate,
      message: "Usuaro actualizado con exito",
    });
  } catch (error) {
    response.status(ERROR).json({ updateUser: false, error: error.message });
  }
};

// SOLO EL ADMIN PUEDE ELIMINAR CUENTAS
const deleteUser = async (request, response) => {
  const { idUser } = request.params;
  try {
    const responseData = await userDetele(idUser);
    response.status(SUCCESS).json({
      deleteUser: true,
      responseData,
      message: "Usuaro eliminado con exito",
    });
  } catch (error) {
    response.status(ERROR).json({ deleteUser: false, error: error.message });
  }
};

const loginHandlers = async (request, response) => {
  const { email, password } = request.query;
  try {
    if (email && !password) {
      const infoUser = await searchInfo({ email });
      response.status(SUCCESS).json(infoUser);
    } else {
      const access = await getLogin({ email, password });
      response.status(SUCCESS).json(access);
    }
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUserId,
  getNameUser,
  updateUser,
  deleteUser,
  loginHandlers,
};
