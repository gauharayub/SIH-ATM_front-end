// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";

// router setup
import routes from "./routes/routes";

// Plugins
// import GlobalComponents from "./globalComponents";
// import GlobalDirectives from "./globalDirectives";
// import Notifications from "./components/NotificationPlugin";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";

// import Chartist from "chartist";

//cookie extension
import VueCookies from 'vue-cookies'
// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history', //removes # form url
  linkExactActiveClass: "nav-item active"
});

// Vue.prototype.$Chartist = Chartist;

Vue.use(VueCookies);
Vue.use(VueRouter);
Vue.use(MaterialDashboard);
// Vue.use(GlobalComponents);
// Vue.use(GlobalDirectives);
// Vue.use(Notifications);

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App),
  router,
  // data: {
  //   Chartist: Chartist
  // }
});
