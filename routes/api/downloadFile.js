const express = require("express");
const checkErrors = require("../../middleware/checkErrors");
const { body } = require("express-validator");

const downloadFile = require("../../services/api/downloadFile");

const router = express.Router();

router.all("/download_file", [body("data.order", "order required").exists(), body("data.name", "name required").exists(), checkErrors, downloadFile]);

module.exports = router;