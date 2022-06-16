const ApiKeysModel = require("../../models/ApiKeys");

module.exports = async (req, res) => {
    const { name, api_key } = req.body.data;
    const [apiKey, created] = await ApiKeysModel.findOrCreate({where: { name }});
    apiKey.setDataValue("api_key", api_key);
    await apiKey.save();
    res.send({
        command:'new_api_key',	
        data: {
            name,
            result: created ? "new" : "edit"
        }
    })
}