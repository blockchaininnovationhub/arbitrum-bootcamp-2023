const sequelize = require("./database");
const { DataTypes } = require("sequelize");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  password: DataTypes.TEXT,
  address: {
    type: DataTypes.TEXT,
    unique: true,
  },
  email: {
    type: DataTypes.TEXT,
    unique: true,
  },
});

module.exports = User;
