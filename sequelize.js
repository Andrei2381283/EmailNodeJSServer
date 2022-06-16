const Sequelize = require("sequelize").Sequelize;
const sequelize = new Sequelize('asdasfjkkkasde21', 'asdasfjkkkasde21', 'DsfS+-E-8m!PycC', {
    host: 'db4free.net',
    port: 3306,
    dialect: 'mysql',
    define: {
        charset: 'utf8',
        dialectOptions: { collate: 'utf8_general_ci' }
    },
    logging:false
});
module.exports = sequelize;