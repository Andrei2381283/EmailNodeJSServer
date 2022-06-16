const { DataTypes } = require('sequelize');
const sequelize = require("../sequelize");

const Files = sequelize.define("files", {
    order: DataTypes.STRING,
    files_name: DataTypes.STRING,
    file: DataTypes.BLOB('long')
})

module.exports = Files;