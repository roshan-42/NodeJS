let express = require("express");
let app = express();

app.get("/login", (req, res) => {
  res.end("Here is login");
});
app.get("/register", (req, res) => {
  res.end("Welcome to register page ");
});

module.exports = app;
