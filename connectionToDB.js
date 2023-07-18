require("dotenv").config();
const express = require("express");
const app = express();
const mysql = require("mysql2");

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = db;
