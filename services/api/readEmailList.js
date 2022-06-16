const EmailsModel = require("../../models/Emails");

module.exports = async (req, res) => {
    const { offset, count } = req.body.data;
    const emails = (await EmailsModel.findAll({offset: offset, limit: count})).map(v => v.email);
    res.send({
        command:'read_email_list',	
        data: {
            list: emails
        }
    })
}