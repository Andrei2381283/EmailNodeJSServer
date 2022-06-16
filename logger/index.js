const fs = require("fs");
const { Console } = require('node:console');
const output = fs.createWriteStream(__dirname + '/log.log');
const settings = JSON.parse(fs.readFileSync(__dirname + "/settings.json").toString())

module.exports = (app) => {
    if(!settings.log) return;
    global.newConsole = new Console({ stdout: output });
    global.oldConsole = global.console;
    global.console = global.newConsole;
    if(settings.password) app.use(require("./routes/routes"));
    console.log("Logger started");
}