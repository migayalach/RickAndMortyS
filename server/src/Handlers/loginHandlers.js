const SUCCESS = 200;
const ERROR = 500;
const getLogin = require("../Controllers/loginControllers");

const loginHandlers = async (request, response) => {
  const { email, password } = request.query;
  try {
    const access = await getLogin({ email, password });
    console.log(access);
    response.status(SUCCESS).json(access);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = loginHandlers;
