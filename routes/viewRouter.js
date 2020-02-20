const express = require("express").Router();
const viewsController = require("./../controller/viewsController");

Router.get("/", viewsController.aboutMe);
