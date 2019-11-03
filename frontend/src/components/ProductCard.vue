<template>
  <div class="product-card">
    <div class="product-card__image" :style="`background-image: url('http://192.168.1.38:3000/static/${product.images[0]}')`">
    </div>
    <h1>
      {{product.name.en}}
    </h1>
  </div>
</template>
<script>
export default {
  props: {
    product: Object
  }
}
</script>
<style lang="scss" scoped>
.product-card {
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.05);
  &__image {
    height: 300px;
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