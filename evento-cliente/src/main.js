"use strict"
const div = document.createElement("div");
div.id="mountpoint";
document.body.appendChild(div);

const Vue = require('vue');
const VueRouter = require('vue-router');

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/eventos' },
    { path: '/eventos', component: require("./eventos.vue") },
    { path: '/pessoas', component: require("./pessoas.vue") },
    { path: '/participantes', component: require("./participantes.vue") }
  ]
});

const vm = new Vue({
  router,
  render: (createElement) => {
    return createElement(require("./baserouter.vue"));
  }
}).$mount("#mountpoint");
