const Router = require("express").Router();
const projectController = require("./../controller/projectController");

Router.route("/").get(projectController.getProject);

module.exports = Router;
