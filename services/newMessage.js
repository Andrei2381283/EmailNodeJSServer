const EmailsModel = require("../models/Emails");
const OrdersModel = require("../models/Orders");
const FilesModel = require("../models/Files");

module.exports = async (from, order, attachments) => {
    console.log(from, order, attachments);
    if(!(await EmailsModel.findOne({where: {email: from}}))) return;
    await OrdersModel.findOrCreate({where: { order }});
    for(const file of attachments){
        const fileModel = (await FilesModel.findOrCreate({where: { order, files_name: file.filename }}))[0];
        fileModel.setDataValue("file", file.content);
        await fileModel.save();
    }
}