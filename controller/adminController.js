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
