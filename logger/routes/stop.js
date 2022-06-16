const express = require("express");

const router = express.Router();

router.all("/stop", (req,res) => {
    global.console = global.oldConsole;
    res.sendStatus(200);
});

module.exports = router;