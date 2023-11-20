const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_workshop_pos', 'postgres', '123', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false // ไม่เก็บ log
});

module.exports = sequelize;