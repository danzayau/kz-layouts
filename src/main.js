import Vue from "vue/dist/vue.js";

import {
  MdField,
  MdAutocomplete,
  MdMenu,
  MdButton,
  MdList,
  MdHighlightText
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
Vue.use(MdField);
Vue.use(MdAutocomplete);
Vue.use(MdMenu);
Vue.use(MdButton);
Vue.use(MdList);
Vue.use(MdHighlightText);

import VueParticles from "vue-particles";
Vue.use(VueParticles);

import Standard1v1 from "./Components/Graphics/Standard1v1.vue";
Vue.component("Standard1v1", Standard1v1);

import StandardBreak from "./Components/Graphics/StandardBreak.vue";
Vue.component("StandardBreak", StandardBreak);

import Dashboard from "./Components/Dashboard/Dashboard.vue";
Vue.component("Dashboard", Dashboard);

new Vue({ el: "#main" });
