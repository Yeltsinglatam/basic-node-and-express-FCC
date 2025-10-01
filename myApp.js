require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

console.log("Hello World");

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/json", (req, res) => {
  const style = process.env.MESSAGE_STYLE; // leer dentro del handler
  const message = style === "uppercase" ? "HELLO JSON" : "Hello json"; // <-- sin espacio
  res.json({ message });
});

module.exports = app;
