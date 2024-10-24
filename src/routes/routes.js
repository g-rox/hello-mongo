const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

// Define your routes
router.get("/", controller.getUsers);
router.post("/", controller.createUser);
// Add more routes as needed

module.exports = router;
