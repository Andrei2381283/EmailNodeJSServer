const express = require("express");
const fs = require("fs");

const router = express.Router();

router.all("/read", (req,res) => {
    res.send(fs.readFileSync(__dirname + "/../log.log"));
});

module.exports = router;