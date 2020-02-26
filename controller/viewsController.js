const catchAsync = require("./../utils/catchAsyn");
const Projects = require("./../model/projectModel");

exports.projects = catchAsync(async (req, res, next) => {
  const projects = await Projects.find();

  res.status(200).render("projects", {
    title: "My Projects",
    projects: projects
  });
});

exports.resume = catchAsync((req, res, next) => {
  res.status(200).render("resume", {
    title: "My Resume"
  });
});

exports.contactMe = catchAsync((req, res, next) => {
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

exports.aboutMe = catchAsync((req, res, next) => {
  res.status(200).render("about", {
    title: "About Me"
  });
});
