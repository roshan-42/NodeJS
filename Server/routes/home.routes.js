let express = require("express");
let app = express();

app.get("/", (req, res) => {
  res.end("This is home page");
});
app.get("/about", (req, res) => {
  res.end("This is about page");
});

module.exports = app;
