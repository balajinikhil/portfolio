const catchAsync = require("./../utils/catchAsyn");
const Projects = require("./../model/projectModel");

exports.projects = catchAsync(async (req, res, next) => {
  const projects = await Projects.find().sort("-createdOn");

  res.status(200).render("projects", {
    title: "My Projects",
    projects: projects
  });
});

exports.resume = catchAsync(async (req, res, next) => {
  res.status(200).render("resume", {
    title: "My Resume"
  });
});

exports.contactMe = catchAsync(async (req, res, next) => {
  res.status(200).render("contact", {
    title: "Contact Me"
  });
});

exports.projectDetail = catchAsync(async (req, res, next) => {
  const project = await Projects.findOne({ slug: req.params.slug });

  res.status(200).render("projectDetail", {
    title: project.name,
    project: project
  });
});

exports.aboutMe = catchAsync(async (req, res, next) => {
  res.status(200).render("about", {
    title: "About Me"
  });
});

exports.login = catchAsync(async (req, res, next) => {
  res.status(200).render("login", {
    title: "Login"
  });
});
