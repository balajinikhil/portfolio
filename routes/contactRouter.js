const Router = require("express").Router();
const contactController = require("./../controller/contactController");

Router.post("/", contactController.sendContact);

module.exports = Router;
