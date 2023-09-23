const mongoose = require("mongoose");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const db = () => {
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB SUCCESS"));
};
module.exports = db;
