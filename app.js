//core
const path = require("path");
//3rd party
const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
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
const youtubeDownloader = require("./controller/youtubeDownloader");
const musicStreaming = require("./controller/musicStreaming");
//security headers
const helmet = require("helmet");

const app = express();
app.set("view engine", "pug");
app.set("views", [
  path.join(__dirname, "/views"),
  path.join(__dirname, "/views/admin"),
]);

//GLOBAL MIDDELWARE  https://balaji-pofo.herokuapp.com/
// cors
app.use(cors());

// static files
app.use(express.static(path.join(__dirname, "/public")));

// security HTTP headers
app.use(helmet());

// limit requests from same IP
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/", limiter);

//body data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// data-sanitization, code-injection
app.use(mongoSanitize());
app.use(xss());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
//UI
app.get("/", viewsController.aboutMe);
app.get("/about", viewsController.aboutMe);
app.get("/projects", viewsController.projects);
app.get("/resume", viewsController.resume);
app.get("/contact", viewsController.contactMe);
app.get("/project/:slug", viewsController.projectDetail);
app.get("/login", viewsController.login);
app.get("/error", (req, res) => {
  res.render("error", {
    title: "Ooops",
  });
});
//ADMIN UI
app.use("/admin", authController.protect, adminRouter);

//YouTube Downloader
app.get("/downloadYoump4", youtubeDownloader.mp4);
app.get("/downloadYoump3", youtubeDownloader.mp3);

// Music Streaming
app.get("/music/search/:str", musicStreaming.search);
app.get("/music/audio/:urls", musicStreaming.play);

//API
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/contact", contactRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
