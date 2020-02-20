const dotenv = require("dotenv");
dotenv.config({
  path: "./config.env"
});

console.log(`NODE_ENV :`, process.env.NODE_ENV);

const app = require("./app");

const PORT = process.env.PORT || 7007;

app.listen(PORT, () => {
  console.log(`Server up and running ${PORT}`);
});
