<!-- eventos.vue -->
<template>
  <div>
    <h1>Eventos</h1>
    <label>Nome do evento</label>
    <input v-model="detalheevento.nomeevento" />
    <button @click="save()">Salvar</button>
    <button @click="del()">Excluir</button>
    <hr/>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="listaeventos.length == 0">
          <td colspan="2">Nenum evento encontrado</td>
        </tr>
        <tr v-for="evt in listaeventos" @click="sel(evt)">
          <td>{{ev.idevento}}</td>
          <td>{{ev.nomeevento}}</td>          
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  const api = require("./serviceapi");
  const eventos = {
    name: "Eventos",
    created() {
      this.list();
    },
    data() {
      return {
        detalheevento: {
          idevento: 0,
          nomeevento: ""
        },
        listaeventos: []
      }
    },
    methods: {
      list() {
        api.eventos.list().then(ret =>
          this.listaeventos = ret.data);
      },
      save() {
        api.eventos.save(this.detalheevento).then(ret =>
          this.detalheevento = { idevento: 0, nomeevento: "" });
      },
      del() {
        ali.eventos.del(this.detalheevento.idevento).then(ret =>
          this.detalheevento = { idevento: 0, nomeevento: "" });
      },
      sel(ev) {
        this.detalheevento = ev;
      }
    }
  };
  module.exports = eventos;
</script>

<style scoped>
  table{
    width:100%;
  }
</style>