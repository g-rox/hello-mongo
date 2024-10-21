// Import any required models here
const Example = require("../models/example");

// Define your service methods
exports.getExamples = async () => {
  try {
    return await Example.find();
  } catch (error) {
    console.log("Error", error);
  }
};

exports.createExample = async (name) => {
  try {
    const example = new Example({ name });
    return await example.save();
  } catch (error) {
    console.log("Error", error);
  }
};
