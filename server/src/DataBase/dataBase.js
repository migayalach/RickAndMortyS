const { Sequelize } = require("sequelize");
require("dotenv").config();
const userModel = require("../Models/userModel");
const favoriteModel = require("../Models/favoriteModel");
const levelModel = require("../Models/levelModel");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

userModel(sequelize);
favoriteModel(sequelize);
levelModel(sequelize);

const { User, Favorite, Level } = sequelize.models;
Level.hasMany(User);
User.belongsToMany(Favorite, { through: "UserFavorite", timestamps: false });
Favorite.belongsToMany(User, { through: "UserFavorite", timestamps: false });

module.exports = { sequelize, ...sequelize.models };
