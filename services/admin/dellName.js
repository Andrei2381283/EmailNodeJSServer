const ApiKeysModel = require("../../models/ApiKeys");

module.exports = async (req, res) => {
    const { name } = req.body.data;
    const apiKey = await ApiKeysModel.findOne({where: { name }});
    if(apiKey)await apiKey.destroy();
    res.send({
        command: 'dell_name',	
        data: {
            name,
            result: apiKey ? 'dell' : "not found"
        }
    })
}