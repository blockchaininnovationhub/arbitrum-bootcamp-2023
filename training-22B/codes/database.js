const { Sequelize, DataTypes } = require('sequelize');
const sqlite3 = require('sqlite3');

const database = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite3'
});


module.exports = database