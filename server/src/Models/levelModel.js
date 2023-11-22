const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("Level", {
    idLevel: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
    },
    level: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  });
};
