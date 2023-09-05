const SUCCESS = 200;
const ERROR = 500;
const {
  postUser,
  getLogin,
  searchInfo,
} = require("../Controllers/userControllers");

const userHandlers = async (request, response) => {
  //agragar middleware para ver si se recive email y password
  const { email, password } = request.body;
  try {
    const newUser = await postUser({ email, password });
    response.status(SUCCESS).json({ create: true, newUser });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
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

module.exports = { userHandlers, loginHandlers };
