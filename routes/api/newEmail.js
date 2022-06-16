const express = require("express");
const checkErrors = require("../../middleware/checkErrors");
const { body } = require("express-validator");

const newEmail = require("../../services/api/newEmail");

const router = express.Router();

router.all("/new_email", [body("data.email", "Email is required").isEmail(), checkErrors, newEmail]);

module.exports = router;