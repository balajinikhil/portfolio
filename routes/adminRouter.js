const Router = require("express").Router();
const adminController = require("./../controller/adminController");

Router.get("/", adminController.dashboard);

Router.get("/projects", adminController.listProjects);

Router.get("/contact", adminController.listContact);

Router.get("/users", adminController.listUsers);

Router.route("/projects/add-new-project")
  .get(adminController.addNewProject)
  .post(adminController.createNew);

Router.route("/edit/:slug")
  .get(adminController.editProjects)
  .post(adminController.updateProject);

Router.get("/delete/:slug", adminController.deleteProject);

module.exports = Router;
