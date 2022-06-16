const express = require("express");
const checkErrors = require("../../middleware/checkErrors");
const { body } = require("express-validator");

const readFileList = require("../../services/api/readFileList");

const router = express.Router();

router.all("/read_file_list", [body("data.order", "order required").exists(), checkErrors, readFileList]);

module.exports = router;