const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

// Define your routes
router.get("/", controller.getExamples);
router.post("/", controller.createExample);
// Add more routes as needed

module.exports = router;
