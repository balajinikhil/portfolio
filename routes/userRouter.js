const Router = require("express").Router();
const authController = require("./../controller/authController");
const userController = require("./../controller/userController");

Router.post("/signin", authController.signIn);
// Router.post("/signup", authController.signUp);

// Router.get("/", userController.getAllUsers);

module.exports = Router;
