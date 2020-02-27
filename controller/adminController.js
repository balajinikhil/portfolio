const catchAsync = require("./../utils/catchAsyn");

exports.dashboard = catchAsync(async (req, res, next) => {
  res.status(200).render("dashboard", {
    title: "Dashboard"
  });
});
