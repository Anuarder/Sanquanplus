<template>
  <div class="sidebar">
    <v-categories></v-categories>
    <v-search></v-search>
  </div>
</template>
<script>
import VCategories from "./Categories"
import VSearch from "./Search"

export default {
  components: {
    VCategories,
    VSearch
  }
}
</script>