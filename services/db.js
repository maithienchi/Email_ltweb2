const sequelize = require('sequelize');

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:1234@localhost:5432/todo';  
const db = new sequelize(connectionString);

module.exports = db;