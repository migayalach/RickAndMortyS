const { User } = require("../DataBase/dataBase");
const postUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return await User.create({ email, password });
  }
  throw Error(`El email: ${email} ya se encuentra registrado`);
};

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

const searchInfo = async ({ email }) => {
  const result = await User.findOne({
    attributes: ["id"],
    where: {
      email,
    },
  });
  if (!result) {
    throw Error(`Este usuario no existe`);
  }
  return { infoUser: result.id };
};

module.exports = { postUser, getLogin, searchInfo };
