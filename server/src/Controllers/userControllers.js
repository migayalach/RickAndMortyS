const { User } = require("../DataBase/dataBase");
const postUser = async ({ email, password }) => {
  const user = await User.findOne({where: { email }});
  if(!user){
    return await User.create({ email, password });
  }
  throw Error(`El email: ${email} ya se encuentra registrado`);
};

module.exports = { postUser };
