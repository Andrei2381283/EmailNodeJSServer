const ApiKeysModel = require("../models/ApiKeys");

module.exports = async (req,res,next) => {
    const api_key = req.body.api_key;
    if(await ApiKeysModel.findOne({where: { api_key }})) next();
    else res.status(400).send("Wrong api_key");
};