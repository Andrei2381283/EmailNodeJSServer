const { DataTypes } = require('sequelize');
const sequelize = require("../sequelize");

const ApiKeys = sequelize.define("api_keys", {
    name: DataTypes.STRING,
    api_key: DataTypes.STRING
})

module.exports = ApiKeys;