const SUCCESS = 200;
const ERROR = 400;
const getUsers = require("../Controllers/usersControllers");

const userHandlers = async (request, response) => {
  const { email, password } = request.query;
  try {
    const access = await getUsers(email, password);
    response.status(SUCCESS).json(access);
  } catch (error) {
    response.status(ERROR).json({ acces: false });
  }
};

module.exports = userHandlers;
