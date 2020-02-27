const jwt = require("jsonwebtoken");
const catchAsyn = require("./../utils/catchAsyn");
const AppError = require("./../utils/appError");
const User = require("./../model/userModel");

const createJWT = id => {
  return jwt.sign({ id: id }, process.env.JWT_SCERET, {
    expiresIn: "90d"
  });
};

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

  const cookieOptions = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true
  };

  const token = await createJWT(user._id);
  res.cookie("jwt", token, cookieOptions);

  res.status(200).json({
    status: "success",
    data: {
      user
    },
    token
  });
});

exports.signUp = catchAsyn(async (req, res, next) => {
  const newUser = await User.create(req.body);

  res.status(200).json({
    status: "success",
    newUser
  });
});
