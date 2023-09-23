const app = require("./app");
const db = require("./db");

db();

app.listen(4000, () => {
  console.log("server running on 4000");
});
