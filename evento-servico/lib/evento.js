"use strict"

const router = require("express").Router();

const Bookshelf = require("./dbconfig").bookshelf;

const Evento = Bookshelf.Model.extend({
  idAttribute: "idevento",
  tableName: "evento"
});

router.get("/list", (req, res) =>
  Evento.fetchAll().then((ret) => res.send(ret)));

router.post("/save", (req, res) =>
  Evento.forge(req.body).save().then((ret) => res.send(ret)));

router.put("/save", (req, res) =>
  Evento.forge({ idevento: req.body.idevento })
    .save(req.body).then((ret) => res.send(ret)));

router.delete("/:idevento", (req, res) => {
  Evento.forge({ idevento: req.params.idevento })
    .destroy().then(() => res.send("OK"));
});

exports.Evento = Evento;
exports.router = router;