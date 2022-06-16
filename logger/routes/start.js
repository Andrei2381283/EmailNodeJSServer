const express = require("express");

const router = express.Router();

router.all("/start", (req,res) => {
    global.console = global.newConsole;
    res.sendStatus(200);
});

module.exports = router;