<template>
  <router-link class="product-card" tag="div" :to='`/product/${product._id}`'>
    <div 
      class="product-card__image" 
      :style="`background-image: url('${api_link}/static/${product.images[0]}')`">
    </div>
    <h1>
      {{product.name[lang_val]}}
    </h1>
  </router-link>
</template>
<script>
import { mapState } from 'vuex'
import LangMixin from "../mixins/Lang"
export default {
  mixins: [LangMixin],
  props: {
    product: Object
  },
  computed: {
    ...mapState(['api_link'])
  }
}
</script>
<style lang="scss" scoped>
.product-card {
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
  &__image {
    height: 200px;
    width: 100%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-bottom: 1px solid #ddd;
  }
  h1 {
    padding: 1rem;
    line-height: 150%;
  }
}
</style>