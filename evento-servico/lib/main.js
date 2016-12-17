"use strict"
const express = require("express");
const bodyParser = require("body-parser");

const knex = require("./dbconfig").knex;

const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
})

app.use(bodyParser.json({
  limit: 1024 * 1024
}));
app.use(bodyParser.raw({
  type: ['application/octet-stream', 'image/*', 'application/pdf'],
  limit: 10240 * 1024 // 10MB
}));

// TODO wire routes

app.use("/evento", require("./evento").router);
app.use("/pessoa", require("./pessoa").router);
app.use("/participante", require("./participante").router);

exports.startup = () => {
  console.log("starting migration subsystem");
  knex.migrate.latest().then(() => {
    console.log("migration done!");
    let port = 3000;
    console.log("listening at port %s", port);
    app.listen(port);
  });
}

// expose app instance
exports.app = app;
