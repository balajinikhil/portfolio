const Router = require("express").Router();
const projectController = require("./../controller/projectController");

Router.route("/")
  .get(projectController.getProject)
  .post(projectController.addProject);

module.exports = Router;
