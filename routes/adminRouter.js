const Router = require("express").Router();

Router.get("/", (req, res) => {
  res.send("working");
});

module.exports = Router;
