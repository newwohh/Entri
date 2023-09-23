// // const express = require("express");
// // const http = require("http");
// // const url = require("url");

// // // http
// // //   .createServer(function (req, res) {
// // //     res.writeHead(200, { "content-type": "text/html" });
// // //     const query = url.parse(
// // //       "http://localhost:4000/default.html?name='nodejs'&Category='Assignment'",
// // //       true
// // //     );
// // //     const { host, search } = query;
// // //     console.log(host, search);
// // //     res.end("welcome");
// // //   })
// // //   .listen(4000);

// // const app = express();

// // app.get("/", (req, res) => {
// //   res.send("holla");
// // });
// // app.get("/profile", (req, res) => {
// //   res.send("holla");
// // });

// // app.listen(4000, () => {
// //   console.log("running");
// // });
// const express = require("express");
// const app = express();
// const bodyParser = require("body-parser");

// const port = 3000;
// const users = { find: "" };
// app.use(express.static("./public"));
// app.use(bodyParser.urlencoded({ extended: false }));

// app.post("/login", (req, res) => {
//   console.log(req.body);
//   const { name } = req.body;
//   res.send(`Welcome ${name}`);
// });

// app.get("/login", (req, res) => {
//   const { token } = req.cookies;

//   if (token) {
//     jwt.verify(token, process.env.JWT_SECRET, function (err, result) {
//       if (result) {
//         res.redirect("/profile");
//       } else {
//         res.sendFile(__dirname + "/login.html");
//       }
//     });
//   } else {
//     res.sendFile(__dirname + "/login.html");
//   }
// });

// app.get("/profile", (req, res) => {
//   const { token } = req.cookies;
//   jwt.verify(token, process.env.JWT_SECRET, function (err, result) {
//     if (err) {
//       res.redirect("/");
//     } else {
//       res.sendFile(__dirname + "/profile.html");
//     }
//   });
// });

// app.get("/signup", (req, res) => {
//   res.sendFile(__dirname + "/signup.html");
// });
// app.get("/login", (req, res) => {
//   res.sendFile(__dirname + "/login.html");
// });
// app.get("/profile", (req, res) => {
//   res.sendFile(__dirname + "/profile.html");
// });

// app.post("/signup", (req, res) => {
//   const { userName, password } = req.body;
//   bcrypt.hash(password, saltround, function (err, hash) {
//     res.sendFile(_dirname + "/signup.html");
//     if (err) {
//       res.send(err.message);
//     } else {
//       console.log(hash);
//       res.redirect("/");
//     }
//   });
// });

// app.get("/", (req, res) => {
//   res.sendFile(_dirname + "/login.html");
// });

// app.post("/", (req, res) => {
//   const { userName, password } = req.body;
//   const user = users.find((data) => data.userName === userName);

//   if (!user) {
//     res.send("type correct password");
//   } else {
//     bcrypt.compare(password, user.password, function (err, result) {
//       if (result) {
//         res.redirect("/profile");
//       } else {
//         res.send("please type correct password");
//       }
//     });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is up and running on port ${port}`);
// });
