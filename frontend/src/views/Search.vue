<template>
  <div class="page">
    <v-sidebar></v-sidebar>
    <div class="search page-content">
      <v-navigation></v-navigation>
      <div class="content">
        <div class="search__container container">
          <div class="search__title">
            <h1>
              Результаты поиска: PSCS-35
            </h1>
            <form>
              <input type="text">
              <button type="submit">Найти</button>
            </form>
            <h2>Найденно: 50</h2>
          </div>
          <div class="search__results">
            <v-product-card :product="product"></v-product-card>
            <v-product-card :product="product"></v-product-card>
            <v-product-card :product="product"></v-product-card>
            <v-product-card :product="product"></v-product-card>
            <v-product-card :product="product"></v-product-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: {
        images: ["products/PSCS-35 Cutting &Sewing Machine for Woven Bags.png"],
        name: {
          en: "PSCS-35 Cutting &Sewing Machine for Woven Bags"
        }
      }
    }
  },
}
</script>
<style lang="scss" scoped>
@import "@/stylesheets/mixins.scss";

.search {
  &__title {
    margin-top: 4rem;
    h1 {
      font-size: 1.3rem;
      font-weight: 500;
    }
    form {
      margin-top: 2rem;
      display: flex;
      flex-wrap: wrap;
      input, button {
        margin-top: .5rem;
        @include input_reset;
        border: 1px solid #ddd;
        padding: .6rem 2rem;
      }
      input {
        margin-right: .6rem;
      }
    }
    h2 {
      margin-top: 1rem;
      font-size: 1rem;
      font-weight: 500;
      color: #3b3b3b;
    }
  }
  &__results {
    margin-top: 5rem;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: center;
  }
}
</style>