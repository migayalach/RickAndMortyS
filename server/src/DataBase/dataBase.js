const { Sequelize } = require("sequelize");
require("dotenv").config();
const userModel = require("../Models/userModel");
const favoriteModel = require("../Models/favoriteModel");
const level = require("../Models/levelModel");

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

const { User, Favorite, Level } = sequelize.models;
User.belongsToMany(Favorite, { through: "UserFavorite", timestamps: false });
Favorite.belongsToMany(User, { through: "UserFavorite", timestamps: false });
Level.hasMany(User, { timestamps: false });
User.belongsTo(Level);

module.exports = { sequelize, ...sequelize.models };
