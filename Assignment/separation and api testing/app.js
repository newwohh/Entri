const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const cors = require("cors");
const approuter = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/data", approuter);

module.exports = app;
