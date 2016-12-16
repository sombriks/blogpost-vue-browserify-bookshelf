<!-- baserouter.vue -->
<template>
  <div class="well">
    <a href="#/eventos">Eventos</a> |
    <a href="#/pessoas">Pessoas</a> |
    <a href="#/participantes">Participantes</a>
    <br/>
    <router-view></router-view>
  </div>
</template>

<script>
const baserouter = {
  name:"BaseRouter"
};
module.exports = baserouter;
</script>

<style>
  .well{
    position:absolute;
    top:5px;
    left:5px;
    bottom:5px;
    right:5px;
  }
</style>