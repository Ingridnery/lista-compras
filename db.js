const Sequelize = require('sequelize');
const sequelize= new Sequelize(
    'lista_de_compras',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        porta: 3306,
        logging: false
    }
)
//instalei o sequelize e o mysql2

module.exports = sequelize;