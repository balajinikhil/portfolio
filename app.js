//core
const path = require("path");
//3rd party
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
//routes
const projectRouter = require("./routes/projectRouter");
const contactRouter = require("./routes/contactRouter");
const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");
//utils
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controller/errorController");
//controller
const viewsController = require("./controller/viewsController");
const authController = require("./controller/authController");
const adminController = require("./controller/adminController");
//security headers
const helmet = require("helmet");

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

//GLOBAL MIDDELWARE
// app.use(helmet());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "/public")));

//UI
app.get("/", viewsController.aboutMe);
app.get("/about", viewsController.aboutMe);
app.get("/projects", viewsController.projects);
app.get("/resume", viewsController.resume);
app.get("/contact", viewsController.contactMe);
app.get("/project/:slug", viewsController.projectDetail);
app.get("/login", viewsController.login);
//ADMIN UI
app.get("/admin", authController.protect, adminController.dashboard);

//API
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/contact", contactRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
