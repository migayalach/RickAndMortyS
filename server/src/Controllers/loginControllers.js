const { User } = require("../DataBase/dataBase");

const getLogin = async ({ email, password }) => {
  if (!email || !password) {
    throw Error(`Faltan datos`);
  }

  if (await User.findOne({ where: { email } })) {
    if (await User.findOne({ where: { password } })) {
      return { access: true };
    }
    throw Error(`La constraseña: ${password} es incorrecta`);
  }
  throw Error(`El email: ${email} no se lo pudo encontrar`);
};

module.exports = getLogin;
