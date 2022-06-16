const express = require("express");
const os = require('os');
const fs = require("fs");
const app = express();

require("./logger/index")(app);
process.on('uncaughtException', function (err) {
    console.error('Caught exception: ', err);
});

const sequelize = require("./sequelize");
const mail = require("./mail");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/routes"));

const newMessage = require("./services/newMessage");

mail.on("newMessage", (msg) => {
    console.log("New message: ", msg);
    const order = msg.body.subject.match(/\#\#([0-9a-zA-Z]+)(?:\s|$)/);
    if(!order || !msg.body.attachments.length) return;
    newMessage(msg.body.from.value[0].address, order[1], msg.body.attachments);
});

const PORT = process.env.PORT || 58800;

global.admin_key = "123123123";


sequelize.sync().then(() => {
    console.log('');
    console.log("Successful connected to MySQL");
    mail.connect();
    app.listen(PORT, () => {
        const ip_adresses = os.networkInterfaces();
        console.log('');
        for(const i in ip_adresses){
            for(const k in ip_adresses[i])if(ip_adresses[i][k].family == 'IPv4')console.log("Server running at http://" + ip_adresses[i][k].address + ':' + PORT);
        }
    });
}).catch((err) => {
    console.log(err);
})