// Import any required services or models here
const service = require("../services/service");

// Define your controller methods
exports.getUsers = async (req, res) => {
  try {
    const users = await service.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { name } = req.body;
    const user = await service.createUser(name);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
