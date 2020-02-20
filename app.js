const path = require("path");
const express = require("express");
const morgan = require("morgan");
const projectRouter = require("./routes/projectRouter");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controller/errorController");
const viewsController = require("./controller/viewsController");

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

app.use(express.json());
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.status(200).sendFile(`${__dirname}/public/start.html`);
});

app.get("/about", viewsController.aboutMe);

app.get("/projects", viewsController.projects);
app.get("/resume", viewsController.resume);
app.get("/contact", viewsController.contactMe);

app.use("/api/v1/projects", projectRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
