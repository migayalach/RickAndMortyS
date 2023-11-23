const loginAcces = require("../Controllers/loginControllers");
const SUCCESS = 200;
const ERROR = 400;

const loginApp = async (request, response) => {
  const { email, password } = request.body;
  try {
    const loginUser = await loginAcces(email, password);
    response.status(SUCCESS).json({ loginUser });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = loginApp;
