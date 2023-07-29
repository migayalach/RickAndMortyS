const user = require("../Utils/user");

const getLogin = async (email, password) => {
  const response = await user.filter(
    (element) => element.email === email && element.password === password
  );
  if (response.length === 1) {
    return { acces: true };
  }
  throw Error (":C");
};

module.exports = getLogin;
