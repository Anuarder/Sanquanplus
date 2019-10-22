<template>
  <div id="app">
    <div class="container">
      <v-navbar></v-navbar>
      <h4>{{currentRouteTitle}}</h4>
      <router-view/>
    </div>
  </div>
</template>
<script>
import VNavbar from "./components/Navigation"
export default {
  components: {
    VNavbar
  },
  data(){
    return {
      // TODO: для динамического изменения смотря на роут
      currentRouteTitle: "Товары"
    }
  }
}
</script>