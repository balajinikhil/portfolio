const catchAsync = require("./../utils/catchAsyn");
const Project = require("./../model/projectModel");
const Contact = require("./../model/contactModel");
const User = require("./../model/userModel");

exports.dashboard = catchAsync(async (req, res, next) => {
  res.status(200).render("dashboard", {
    title: "Dashboard"
  });
});

exports.listProjects = catchAsync(async (req, res, next) => {
  const projects = await Project.find();

  res.status(200).render("dashboardProject", {
    title: "project list",
    projects
  });
});

exports.listContact = catchAsync(async (req, res, next) => {
  const contacts = await Contact.find();

  res.status(200).render("dashboardContact", {
    title: "Contact",
    contacts
  });
});

exports.listUsers = catchAsync(async (req, res, nextt) => {
  const users = await User.find();

  res.status(200).render("dashboardUser", {
    title: "Users list",
    users
  });
});

exports.addNewProject = catchAsync(async (req, res, next) => {
  res.status(200).render("newProject", {
    title: "create project"
  });
});

exports.createNew = catchAsync(async (req, res, next) => {
  const bodyData = req.body;
  let classes = ["danger", "primary", "success", "info", "warning"];
  bodyData.tags = bodyData.tags.split(",").map((ele, i) => {
    return {
      name: ele,
      class: classes[i]
    };
  });
  const project = await Project.create(bodyData);

  res.status(200).redirect("/admin/projects");
});
