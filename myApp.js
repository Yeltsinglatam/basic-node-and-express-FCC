let express = require("express");
let path = require("path");
let app = express();

console.log("Hola Mundo");

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/json", (req, res) => {
  res.json({ message: "Hello json" });
});

module.exports = app;
