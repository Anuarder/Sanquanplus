<template>
  <div class="categories">
     <ul class="list-group">
      <router-link 
        v-for="item in categories" 
        :key="item._id" 
        :to="`/products/${item._id}`"
        class="list-group-item">
        {{item.name.ru}}
      </router-link>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['categories'])
  },
  created(){
    this.getCategories();
  },
  methods: {
    ...mapActions([
      'getCategories'
    ])
  }
}
</script>