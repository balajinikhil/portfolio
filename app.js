const path = require("path");
const express = require("express");
const morgan = require("morgan");
const projectRouter = require("./routes/projectRouter");
const AppError = require("./utils/appError");
const compression = require("compression");
const globalErrorHandler = require("./controller/errorController");
const viewsController = require("./controller/viewsController");
const userRouter = require("./model/userModel");
//security headers
const helmet = require("helmet");

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

//GLOBAL MIDDELWARE
app.use(helmet());

if (process.env.NODE_ENV === "production") app.use(express.json());
app.use(morgan("dev"));
app.use(compression());

app.use(express.static(path.join(__dirname, "/public")));

//UI
app.get("/", (req, res) => {
  res.status(200).sendFile(`${__dirname}/public/start.html`);
});
app.get("/about", viewsController.aboutMe);
app.get("/projects", viewsController.projects);
app.get("/resume", viewsController.resume);
app.get("/contact", viewsController.contactMe);
app.get("/project/:slug", viewsController.projectDetail);

//API
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
