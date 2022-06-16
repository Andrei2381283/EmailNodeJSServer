const EmailsModel = require("../../models/Emails");

module.exports = async (req, res) => {
    const email = req.body.data.email;
    await EmailsModel.findOrCreate({where: { email }});
    res.send({
        command:'new_email',	
        data: {
            email,
            result: 'new'
        }
    })
}