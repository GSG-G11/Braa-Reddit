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
} = require("../controler");
const serverError = require("../controler/error");
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
router.post("/signup", signUpController);
router.post("/login", loginController);
router.get("/logout", logoutController);
router.post("/addpost", authHome,addpostController);
router.get('/getPost',getPostController)
router.get('/user',authHome,getusernameController)
router.use(serverError);



module.exports = router;
