const express = require("express");

const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.send("All Healthy Good to Go!");
});

// api routes
app.use("/api", require("./api"));

app.get("*", (req, res) => {
  res.status(404).send("Oops can't find that route!");
});

app.use((error, req, res, next) => {
  res.satus(500).send(error);
});

module.exports = app;
