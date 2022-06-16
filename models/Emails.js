const { DataTypes } = require('sequelize');
const sequelize = require("./../sequelize");

const Emails = sequelize.define("emails", {
    email: DataTypes.STRING
})

module.exports = Emails;