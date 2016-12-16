
const axios = require("axios");

const api = axios.create({
  baseURL: 'http://localhost:3000',
})

const eventos = {
  list: () => api.get("/evento/list"),
  save: (ev) => api[ev.idevento ? "put" : "post"]("/evento/save", ev),
  del: (idevento) => api.delete("/evento/" + idevento)
};
exports.eventos = eventos;