const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "UserFavorites",
    {},
    {
      timestamps: false,
    }
  );
};
