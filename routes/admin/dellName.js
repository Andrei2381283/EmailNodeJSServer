const express = require("express");
const checkErrors = require("../../middleware/checkErrors");
const { body } = require("express-validator");

const dellName = require("../../services/admin/dellName");

const router = express.Router();

router.all("/dell_name", [body("data.name", "name is required").exists(), checkErrors, dellName]);

module.exports = router;