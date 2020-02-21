const catchAsyn = require("./../utils/catchAsyn");
const Project = require("./../model/projectModel");

exports.getProject = catchAsyn(async (req, res) => {
  const project = await Project.find();

  res.status(200).json({
    status: "sucess",
    data: {
      data: project
    }
  });
});

exports.addProject = catchAsyn(async (req, res, next) => {
  const newProject = await Project.create(req.body);

  res.status(200).json({
    status: "sucess",
    newProject
  });
});
