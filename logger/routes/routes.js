const express = require("express");

const useMiddlewareForRoutes = require("../utils/useMiddlewareForRoutes");

const checkPassword = require("../middleware/checkPassword");

const router = express.Router();

router.use([
    (req, res, next) => {
        req.oldurl = req.url;
        req.url = req.originalUrl = req._parsedUrl.pathname = req._parsedUrl.path = req._parsedUrl.href = req._parsedUrl._raw = "/" + req.query.cmd;
        next();
        console.log(req);
    },
    useMiddlewareForRoutes(checkPassword, [
        require("./read"),
        require("./start"),
        require("./stop")
    ]),
    (req, res, next) => {
        req.url = req.originalUrl = req._parsedUrl.pathname = req._parsedUrl.path = req._parsedUrl.href = req._parsedUrl._raw = req.oldurl;
        next();
    }
])

module.exports = router;