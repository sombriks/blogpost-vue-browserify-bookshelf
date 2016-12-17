"use strict"

const router = require("express").Router();

const Bookshelf = require("./dbconfig").bookshelf;
const knex = require("./dbconfig").knex;

const Participante = Bookshelf.Model.extend({
  tableName: "vw_participante"
});

router.get("/:idevento", (req, res) =>
  Participante.fetchAll().then((ret) => res.send(ret)));

router.post("/:idevento/:idpessoa", (req, res) =>
  knex("evento_participante").insert(req.params).then((ret) => res.send("OK")));

router.delete("/:idevento/:idpessoa", (req, res) => 
  knex("evento_participante").del().where(req.params).then(() => res.send("OK")));

exports.Evento = Participante;
exports.router = router;