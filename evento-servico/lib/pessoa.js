"use strict"

const router = require("express").Router();

const Bookshelf = require("./dbconfig").bookshelf;

const Pessoa = Bookshelf.Model.extend({
  idAttribute: "idpessoa",
  tableName: "vw_pessoa"
});

router.get("/list", (req, res) =>
  Pessoa.fetchAll().then((ret) => res.send(ret)));

router.post("/save", (req, res) =>
  Pessoa.forge(req.body).save().then((ret) => res.send(ret)));

router.put("/save", (req, res) =>
  Pessoa.forge({ idpessoa: req.body.idpessoa })
    .save(req.body).then((ret) => res.send(ret)));

router.delete("/:idpessoa", (req, res) => 
  Pessoa.forge({ idpessoa: req.params.idpessoa })
    .destroy().then(() => res.send("OK")));

exports.Evento = Pessoa;
exports.router = router;