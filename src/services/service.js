const User = require("../models/user");

exports.getUsers = async () => {
  try {
    return await User.find();
  } catch (error) {
    console.log("Error", error);
  }
};

exports.createUser = async (name) => {
  try {
    const user = new User({ name });
    return await user.save();
  } catch (error) {
    console.log("Error", error);
  }
};
