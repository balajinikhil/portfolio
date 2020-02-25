const catchAsyn = require("./../utils/catchAsyn");
const AppError = require("./../utils/appError");
const User = require("./../model/userModel");

exports.signIn = catchAsyn(async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return next(new AppError("Please enter email and password", 400));
  }

  const user = await User.findOne({ email: req.body.email }).select(
    "+password"
  );

  if (!user || !password.checkPassword(user.password, req.body.password)) {
    return next(new AppError("Please check your email or password"));
  }
});

exports.signUp = catchAsyn(async (req, res, next) => {
  const newUser = await User.create(req.body);

  res.status(200).json({
    status: "success",
    newUser
  });
});
