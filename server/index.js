const app = require("./src/app");
const { sequelize } = require("./src/DataBase/dataBase");
const PORT = 3001;

app.listen(PORT, () => {
  sequelize.sync({ alter: true });
  console.log(`Servidor levantado en el puerto: ${PORT}`);
});
