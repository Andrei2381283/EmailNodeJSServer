const fs = require("fs");
const settings = JSON.parse(fs.readFileSync(__dirname + "/../settings.json").toString())

module.exports = (req, res, next) => {
    if(req.query.password == settings.password) next()
    else res.status(400).send("Wrong password");
}