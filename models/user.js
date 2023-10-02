const db = require("../db.js");
const Sequelize = require("sequelize"); //importando o sequelize

const User = db.define("user", {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nome: {type: Sequelize.STRING, allowNull: false},
    email: {type: Sequelize.STRING, allowNull: false},
    senha: {type: Sequelize.STRING, allowNull: false}
});
module.exports = User;