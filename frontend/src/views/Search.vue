<template>
  <div class="page">
    <v-sidebar></v-sidebar>
    <div class="search page-content">
      <v-navigation></v-navigation>
      <div class="content">
        <div class="search__container container" >
          <div class="container" v-if="isLoading">
            {{$t('loading')}}
          </div>
          <div v-if="!isLoading">
            <div class="search__title">
              <h1>
                {{$t('search_result')}}: {{$route.params.text}}
              </h1>
              <form @submit.prevent="searchProducts">
                <input type="text" v-model.trim="text" required>
                <button type="submit">{{$t('search_find')}}</button>
              </form>
              <h2>{{$t('search_count')}}: {{products.length}}</h2>
            </div>
            <div class="search__results">
              <v-product-card 
                v-for="product in products"
                :key="product._id"
                :product="product">
              </v-product-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductServices from '../services/Products.js';
import SearchMixin from '../mixins/Search'
export default {
  mixins: [SearchMixin],
  data() {
    return {
      products: [],
      isLoading: false
    }
  },
  async beforeRouteEnter(to, from, next) {
    try {
      const response = await ProductServices.getSearchProducts(to.params.text);
      next(vm => {
        vm.text = to.params.text;
        vm.setData(response.data.products);
      })
    }catch(err) {
      next()
      console.log(err);
    }
  },
  async beforeRouteUpdate(to, from, next) {
    try {
      this.isLoading = true;
      this.products = [];
      this.text = to.params.text;
      const response = await ProductServices.getSearchProducts(to.params.text);
      this.setData(response.data.products);
      next();
    }catch(err) {
      next();
      console.log(err);
    }
  },
  methods: {
    setData(data) {
      this.products = data;
      this.isLoading = false;
    }
  }
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