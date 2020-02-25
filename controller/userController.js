const User = require("./../model/userModel");
const catchAsync = require("./../utils/catchAsyn");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: "success",
    users
  });
});
