const app = require("./src/app");
const { sequelize } = require("./src/DataBase/dataBase");
const PORT = 3001;

app.listen(PORT, () => {
  sequelize.sync({ force: true });
  console.log(`Servidor levantado en el puerto: ${PORT}`);
});
