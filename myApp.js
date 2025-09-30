let express = require("express");
let app = express();

console.log("Hola Mundo");

app.get("/", function (req, res) {
  res.send("Hello Express");
});

module.exports = app;
