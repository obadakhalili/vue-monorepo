<template>
  <div id="app">
    <h1>App</h1>
    <Header />
    <Banner />
  </div>
</template>

<script>
import Header from "vue-components/dist/header/Header.common.js"
import Banner from "vue-components/dist/banner/Banner.common.js"
import "vue-components/dist/banner/Banner.css"

export default {
  name: "App",
  components: {
    Header,
    Banner,
  },
}
</script>
