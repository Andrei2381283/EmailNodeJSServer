const Imap = require('imap');
const simpleParser = require('mailparser').simpleParser;

module.exports = mail = new Imap({
    user: 'saas@il-soft.ru',
    password: 'M3512086urat',
    host: 'mail.hostland.ru',
    port: 993,
    tls: true,
    tlsOptions: { rejectUnauthorized: false }
});

function checkMessage(f){
    f.on('message', function(msg, seqno) {
        var msgObject = {
            uid: 0,
            body: "",
            flags: [],
            date: new Date()
        }
        msg.on('body', function(stream, info) {
            stream.on("data", (chunk) => {
                msgObject.body += chunk.toString();
            })
        });
        msg.once('attributes', function(attrs) {
            msgObject.uid = attrs.uid;
            msgObject.flags = attrs.flags;
            msgObject.date = attrs.date;
        });
        msg.once('end', async function() {
            if(msgObject.flags.includes("\\Seen")) return console.log(msgObject);
            mail.addFlags(msgObject.uid, ["\\Seen"])
            msgObject.body = await simpleParser(msgObject.body);
            mail.emit("newMessage", msgObject);
        });
    });
    f.once('error', function(err) {
        console.log('Fetch error: ' + err);
    });
    f.once('end', function() {
        
    });
}

mail.once("ready", () => {
    console.log("Successful connected to email");
    /* mail.getBoxes((err, boxes) => {
        console.log(boxes);
    }) */
    mail.openBox('INBOX', false, (err, box) => {
        if(err) return console.error(err);
        mail.search([ 'UNSEEN', ['SINCE', 'January 1, 2022'] ], function(err, results) {
            if (err) return console.log(err);
            if(!results.length) return;
            checkMessage(mail.fetch(results, { bodies: ''/* , markSeen: true */ }));
        });
        setInterval(() => {
            
            mail.search([ 'UNSEEN', ['SINCE', 'January 1, 2022'] ], function(err, results) {
                if (err) return console.log(err);
                if(!results.length) return;
                console.log("New mails: ", results);
                checkMessage(mail.fetch(results, { bodies: ''/* , markSeen: true */ }));
            });
        }, 2000);
    });
});

mail.once('error', function(err) {
    console.log(err);
    mail.connect();
});

mail.once('end', function() {
    console.log('Connection ended');
});