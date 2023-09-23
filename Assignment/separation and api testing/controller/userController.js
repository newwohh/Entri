const User = require("../models/userModel");

exports.getUsers = async (req, res) => {
  try {
    const data = req.body;

    console.log(data);
    res.status(200).json({
      data: data,
    });

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
