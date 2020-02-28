module.exports = (err, req, res, next) => {
  if ((process.env.NODE_ENV = "development")) console.log(err);

  err.statusCode = err.statusCode || 500;
  /*
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack
  });
*/

  if (process.env.NODE_ENV == "production") {
    err.message == "Something went wrong";
  }
  res.status(err.statusCode).render("error", {
    title: "Oops",
    message: err.message,
    statusCode: err.statusCode
  });
};
