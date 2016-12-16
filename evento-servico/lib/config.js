"use strict"

const env = process.env.NODE_ENV || "development";
console.log("we are on [%s] environment",env);

const knex = require("knex")(require("../knexfile")[env]);
exports.knex = knex;

const bookshelf = require("bookshelf")(knex);
exports.bookshelf = bookshelf;
