<template>
  <div id="app" class="app">
    <div class="app-navigation">
      <v-navigation></v-navigation>
      <v-sidebar></v-sidebar>
    </div>
    <div class="app-content">
      <router-view></router-view>
    </div>
    <div class="app-footer">
      <v-footer></v-footer>
    </div>
  </div>
</template>
<script>
import VNavigation from "./components/Navigation"
import VSidebar from "./components/Sidebar"
import VFooter from "./components/Footer"
export default {
  components: {
    VNavigation,
    VSidebar,
    VFooter
  }
}
</script>