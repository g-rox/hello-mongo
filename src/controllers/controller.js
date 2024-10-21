// Import any required services or models here
const service = require("../services/service");

// Define your controller methods
exports.getExamples = async (req, res) => {
  try {
    const examples = await service.getExamples();
    res.json(examples);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createExample = async (req, res) => {
  try {
    const { name } = req.body;
    const newExample = await service.createExample(name);
    res.json(newExample);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
