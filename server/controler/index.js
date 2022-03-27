const signUpController = require("./signup");
const loginController = require("./signin");
const logoutController = require("./logout");
const addpostController = require("./addpostController");
const getPostController = require("./getPostController");
const getusernameController = require("./getusernameController");
module.exports = {
  signUpController,
  loginController,
  logoutController,
  addpostController,
  getPostController,
  getusernameController,
};
