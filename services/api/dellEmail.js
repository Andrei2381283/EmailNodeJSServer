const EmailsModel = require("../../models/Emails");

module.exports = async (req, res) => {
    const { email } = req.body.data;
    const emailModel = await EmailsModel.findOne({where: { email }});
    if(emailModel)await emailModel.destroy();
    res.send({
        command: 'dell_email',	
        data: {
            email,
            result: emailModel ? 'dell' : "not found"
        }
    })
}