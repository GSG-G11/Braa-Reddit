const signUpController = require("./signup");
const loginController = require("./signin");
const logoutController = require("./logout");
const addpostController = require("./addpostController");
const getPostController = require("./getPostController");
const getusernameController = require("./getusernameController");
const getUserPost = require("./getUserPost");
const deletePostController = require("./deletePostController");
const getProfileUserController = require("./getProfileUserController");
module.exports = {
  signUpController,
  loginController,
  logoutController,
  addpostController,
  getPostController,
  getusernameController,
  getUserPost,
  deletePostController,
  getProfileUserController,
};
