const FilesModel = require("../../models/Files");

module.exports = async (req, res) => {
    const { order } = req.body.data;
    const files = (await FilesModel.findAll({where: { order }})).map(v => v.files_name);
    res.send({
        command:'read_file_list',	
        data: {
            order,
            list: files
        }
    })
}