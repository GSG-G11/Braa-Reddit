const { join } = require("path");
const app = require("../app");
const router = require("express").Router();
const {
  signUpController,
  loginController,
  logoutController,
  addpostController,
  getPostController,
  getusernameController,
  getUserPost,
  deletePostController,
  getProfileUserController,
} = require("../controler");
const {serverError,clientError} = require("../controler/error");
const { authHome, authUser } = require("../middleware");

router.get("/signup", authUser, (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "public", "html", "signup.html"));
});
router.get("/login", authUser, (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "public", "html", "signin.html"));
});
router.get("/home", authHome, (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "public", "html", "home.html"));
});
router.get("/profile", authHome, (req, res) => {
  res.sendFile(join(__dirname, "..", "..", "public", "html", "profile.html"));
});
router.post("/signup", signUpController);
router.post("/login", loginController);
router.get("/logout", logoutController);
router.post("/addpost", authHome, addpostController);
router.get("/getPost", getPostController);
router.get("/user", authHome, getusernameController);
router.get("/userPosts", authHome, getUserPost);
router.delete("/delete/:id", deletePostController);
router.get("/profile/:id", getProfileUserController);

router.use(clientError);
router.use(serverError);

module.exports = router;
