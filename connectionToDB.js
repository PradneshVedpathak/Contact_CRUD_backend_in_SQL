require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log("error in connection ");
  } else {
    console.log("Connected Successfully!!");
  }
});

module.exports = db;
