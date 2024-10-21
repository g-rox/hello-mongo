const mongoose = require("mongoose");

// Define the example schema
const exampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the example model
const Example = mongoose.model("Example", exampleSchema);

module.exports = Example;
