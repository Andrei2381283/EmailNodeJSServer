const express = require("express");
const checkErrors = require("../../middleware/checkErrors");
const { body } = require("express-validator");

const newApiKey = require("../../services/admin/newApiKey");

const router = express.Router();

router.all("/new_api_key", [body("data.name", "name is required").exists(), body("data.api_key", "api_key is required").exists(), checkErrors, newApiKey]);

module.exports = router;