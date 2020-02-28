const Router = require("express").Router();
const adminController = require("./../controller/adminController");

Router.get("/", adminController.dashboard);

Router.get("/projects", adminController.listProjects);

Router.get("/contact", adminController.listContact);

Router.get("/users", adminController.listUsers);

Router.route("/projects/add-new-project")
  .get(adminController.addNewProject)
  .post(adminController.createNew);

module.exports = Router;
