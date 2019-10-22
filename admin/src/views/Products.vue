<template>
  <div class="home">
    <ul class="list-group mt-4">
      <li class="list-group-item">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
    <v-pagination></v-pagination>
  </div>
</template>
<script>
import VPagination from "../components/Pagination"
export default {
  components: {
    VPagination
  }
}
</script>