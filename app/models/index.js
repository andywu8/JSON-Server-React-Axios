const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./app/db/database.sqlite"
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./person.model.js")(sequelize, Sequelize);

module.exports = db;