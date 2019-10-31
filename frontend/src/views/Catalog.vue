<template>
  <div class="catalog page">
    <v-sidebar></v-sidebar>
    <div class="container">
      <v-navigation isCatalog></v-navigation>
      <div class="catalog__content content">
        <div class="catalog__categories">
          <div class="catalog__categories-container">
            <div class="catalog__title">
              Каталог
            </div>
            <div 
              v-for="(item, i) in categories"
              :key="item._id"
              class="catalog__category">
              <span class="count">{{ i+1 }}</span>
              <span>
                {{ item.name.en }}
              </span>
            </div>
          </div>
        </div>
        <div class="catalog__products">
          products
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  created(){
    this.getCategories();
  },
  computed: {
    ...mapGetters(['categories'])
  },
  methods: {
    ...mapActions([
      'getCategories'
    ])
  }
}
</script>