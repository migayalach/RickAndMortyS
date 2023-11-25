const { emailRegex } = require("../Utils/regex");

const postUserMiddleware = (request, response, next) => {
  const {
    email,
    // , password
  } = request.body;
  try {
    if (!emailRegex.test(email)) {
      throw Error(`Introduzca una direccion email valida`);
    }
    // if (password.length < 1) {
    //   throw Error(`El campo password no puede estar vacio`);
    // }
    return next();
  } catch (error) {
    response.status(400).json({ user: "false", error: error.message });
  }
};

module.exports = {
  postUserMiddleware,
};
