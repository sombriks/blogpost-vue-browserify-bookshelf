"use strict"
const express = require("express");
const bodyParser = require("body-parser");

const knex = require("./config").knex;

const app = express()

app.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin', '*');
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

exports.startup = () => {
  console.log("starting migration subsystem");
  knex.migrate.latest().then(() => {
    console.log("migration done!");
    let port = 3000 
    console.log("listening at port %s", port);
    server.listen(port);
  });
}

// expose app instance
exports.app = app;
