const catchAsyn = require("./../utils/catchAsyn");

exports.getProject = catchAsyn((req, res) => {
  res.send("working");
});
