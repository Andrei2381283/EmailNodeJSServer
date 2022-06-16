const { DataTypes } = require('sequelize');
const sequelize = require("../sequelize");

const Orders = sequelize.define("orders", {
    order: DataTypes.STRING
})

module.exports = Orders;