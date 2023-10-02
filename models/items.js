const db = require("../db.js");
const Sequelize = require("sequelize"); //importando o sequelize

const Item = db.define("item", {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    descricao: {type: Sequelize.STRING, allowNull: false},
    estado: {type: Sequelize.STRING, allowNull: false},
    usuario_id: {type: Sequelize.INTEGER, allowNull: false}
});
module.exports = Item;