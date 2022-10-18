const express = require("express");
const db = require("../config/database.js");
const Router = express.Router();

/* 연결확인 */
db.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});

module.exports = Router;