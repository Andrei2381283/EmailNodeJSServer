const FilesModel = require("../../models/Files");

module.exports = async (req, res) => {
    const { order, name } = req.body.data;
    const file = await FilesModel.findOne({where: { order, files_name: name }});
    if(!file) return res.sendStatus(400);
    res.send(file.file);
}