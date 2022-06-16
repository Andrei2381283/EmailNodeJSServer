const express = require("express");
const checkErrors = require("../../middleware/checkErrors");
const { body } = require("express-validator");

const readEmailList = require("../../services/api/readEmailList");

const router = express.Router();

router.all("/read_email_list", [body("data.offset").default(0).isInt().withMessage("offset is not integer"), body("data.count").default(20).isInt().withMessage("count is not integer"), checkErrors, readEmailList]);

module.exports = router;