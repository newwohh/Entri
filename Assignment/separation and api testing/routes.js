const express = require("express");
const { getUsers } = require("./controller/userController");
approuter = express.Router();
approuter.post("/", getUsers);

module.exports = approuter;
