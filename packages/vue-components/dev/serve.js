import Vue from "vue"

import Playground from "./Playground.vue"

import Banner from "../Components/Banner.vue"
import Header from "../Components/Header.vue"

Vue.use(Banner).use(Header)

new Vue({
  render: (h) => h(Playground),
}).$mount("#app")
