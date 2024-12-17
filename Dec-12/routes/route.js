const express = require("express");
const route = express.Router();
const ctl = require("../controller/ctl");
const multer = require('../multer/multer');

route.get("/", ctl.HomePage);
route.get("/add",  ctl.AddPage);
route.post("/addData",multer, ctl.AddData);
route.get("/delete", ctl.DeleteData);
route.get("/edit", ctl.EditPage);
route.post("/updateData", multer,ctl.UpdateData);

module.exports = route;

