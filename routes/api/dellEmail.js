const express = require("express");
const checkErrors = require("../../middleware/checkErrors");
const { body } = require("express-validator");

const dellEmail = require("../../services/api/dellEmail");

const router = express.Router();

router.all("/dell_email", [body("data.email", "email is required").exists(), checkErrors, dellEmail]);

module.exports = router;