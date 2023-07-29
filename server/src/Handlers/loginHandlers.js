const SUCCESS = 200;
const ERROR = 400;
const getLogin = require("../Controllers/loginControllers");

const loginHandlers = async (request, response) => {
  const { email, password } = request.query;
  try {
    const access = await getLogin(email, password);
    response.status(SUCCESS).json(access);
  } catch (error) {
    response.status(ERROR).json({ acces: false });
  }
};

module.exports = loginHandlers;
