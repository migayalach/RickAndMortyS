const { User, Level } = require("../DataBase/dataBase");
const bcrypt = require("bcrypt");

const loginAcces = async (email, password) => {
  const infoUser = await User.findOne({
    where: { email },
    include: { model: Level },
  });
  if (!infoUser) {
    throw new Error(`El email: ${email}, no se encuentra registrado`);
  }
  if (await bcrypt.compare(password, infoUser.password)) {
    return {
      access: true,
      idLevel: infoUser.Level.idLevel,
      idUser: infoUser.id,
      level: infoUser.Level.level,
      user: email,
    };
  }
  return { access: false, message: `¡Contraseña: ${password}, no valida!` };
};

module.exports = loginAcces;
