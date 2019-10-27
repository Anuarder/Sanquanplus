<template>
  <div class="categories">
    <ul class="list-group">
      <router-link
        class="list-group-item list-group-item-action list-group-item-success"
        active-class="active"
        to="/category/create">
        Создать категорию
      </router-link>
      <router-link
        v-for="item in categories"
        :key="item._id"
        :to="`/products/${item._id}`"
        active-class="active"
        class="list-group-item list-group-item-action">
        {{item.name.en}}
      </router-link>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["categories"])
  },
  created() {
    this.getCategories();
  },
  methods: {
    ...mapActions(["getCategories"])
  }
};
</script>