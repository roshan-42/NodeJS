const express = require("express");

const app = express();
const auth_routes = require("./routes/auth.routes");
const home_routes = require("./routes/home.routes");

//home ,/about /register /login
app.use(home_routes);

app.use(auth_routes);

app.use((req, res) => {
  res.end({
    result: null,
    status: 404,
    msg: "not found",
  });
});

app.listen(3001, "localhost", (err) => {
  if (err) {
    console.log("Server connection error");
  } else {
    //this refers to server is running
    console.log("Server is listening to the port: 3001");
    console.log("Press Ctrl+c to end the server connection");
  }
});
