const catchAsyn = require("./../utils/catchAsyn");
const AppError = require("./../utils/appError");
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
