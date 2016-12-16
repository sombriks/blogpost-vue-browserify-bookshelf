// serviceapi.js
"use sctrict"
const axios = require("axios");

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

const eventos = {
  list: () =>
    api.get("/evento/list"),
  save: (ev) =>
    api[ev.idevento ? "put" : "post"]("/evento/save", ev),
  del: (idevento) =>
    api.delete(`/evento/${idevento}`),
  participar: (idevento, idpessoa) =>
    api.post(`/participante/${idevento}/${idpessoa}`),
  desistir: (idevento, idpessoa) =>
    api.delete(`/participante/${idevento}/${idpessoa}`)
};

const pessoas = {
  list: () =>
    api.get("/pessoa/list"),
  save: (ev) =>
    api[ev.idevento ? "put" : "post"]("/pessoa/save", ev),
  del: (idpessoa) =>
    api.delete("/pessoas/" + idpessoa),
  participantes: (idevento) =>
    api.get("/participante/" + idevento),
};

exports.eventos = eventos;
exports.pessoas = pessoas;