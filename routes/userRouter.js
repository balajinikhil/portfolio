const Router = require("express").Router();
const authController = require("./../controller/authController");

Router.post("/signin", authController.signIn);

module.exports = Router;
