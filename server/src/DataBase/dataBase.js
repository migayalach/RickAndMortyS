const { Sequelize } = require("sequelize");
require("dotenv").config();
const userModel = require("../Models/userModel");
const favoriteModel = require("../Models/favoriteModel");
const level = require("../Models/levelModel");
const userFavorite = require("../Models/userFavorite");

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
level(sequelize);
userFavorite(sequelize);

const { User, Favorite, Level, UserFavorites } = sequelize.models;
User.belongsToMany(Favorite, { through: UserFavorites, timestamps: false });
Favorite.belongsToMany(User, { through: UserFavorites, timestamps: false });
Level.hasMany(User, { timestamps: false });
User.belongsTo(Level);

module.exports = { sequelize, ...sequelize.models };
