process.on("uncaughtException", err => {
  console.log(err);

  process.exit(1);
});

const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env"
});

console.log(`NODE_ENV :`, process.env.NODE_ENV);

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log(`DB connected`);
  });

const app = require("./app");

const PORT = process.env.PORT || 7007;

const server = app.listen(PORT, () => {
  console.log(`Server up and running ${PORT}`);
});

process.on("unhandledRejection", err => {
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
