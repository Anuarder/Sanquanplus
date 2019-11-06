<template>
  <div class="page">
    <v-sidebar></v-sidebar>
    <div class="product page-content">
      <v-navigation></v-navigation>
      <div class="content">
        <div class="product__container container" v-if="product">
          <h1 class="product__title">
            {{product.name[lang_val]}}
          </h1>
          <div class="product__info">
            <div class="product__images">
                <div 
                  v-for="(item, i) in product.images"
                  :key="i">
                  <img :src="`${api_link}/static/${item}`">
                </div>
            </div>
            <p 
              v-html="product.description[lang_val]">
            </p>
          </div>
          <div class="product__characteristics">
            <div 
                v-for="item in product.characteristics" 
                :key="item._id">
              <h1 v-if="item.name">{{item.name[lang_val]}}</h1>
              <table>
                <thead>
                  <tr>
                    <th v-for="head in item.headers" :key="head.value">
                      {{head.name[lang_val]}}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, i) in item.data" :key="i">
                    <td v-for="head in item.headers" :key="head.value">
                      {{data[head.value][lang_val]}}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <button class="product__button" @click="dialog = true">
            {{$t('send_request')}}
          </button>
        </div>
        <v-dialog
          v-if="dialog"
          :product="product"
          @close="dialog = false">
        </v-dialog>
      </div>
      <v-footer></v-footer>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import VDialog from '../components/Dialog'
import ProductsServices from '../services/Products.js'

import LangMixin from "../mixins/Lang"
export default {
  mixins: [LangMixin],
  components: {
    VDialog
  },
  data() {
    return {
      dialog: false,
      product: null
    }
  },
  created() {
    this.getProduct(this.$route.params.id);
  },
  computed: {
    ...mapState(['api_link']),
  },
  methods: {
    async getProduct(product_id) {
      try {
        const response = await ProductsServices.getProductById(product_id);
        this.product = response.data.product;
      }catch(err) {
        console.log(err);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/stylesheets/mixins.scss";

.product {
  &__title {
    margin-top: 5rem;
    font-size: 1.8rem;
    font-weight: 500;
  }
  &__info {
    margin-top: 3rem;
    display: flex;

    p {
      font-size: 1.1rem;
      line-height: 170%;
      margin-left: 1rem;
    }
  }

  &__images {
    max-width: 45%;
    margin-right: 1.5rem;
    img {
      box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
    }
  }

  &__characteristics {
    margin-top: 5rem;
    overflow: auto;
    &::-webkit-scrollbar {
      height: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #c3c3c3;
      height: 3px;
      border-radius: 2px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    h1 {
      margin-top: 2rem;
      margin-left: 1rem;
    }
    table {
      margin-top: 1rem;
      min-width: 700px;
      width: 100%;
      border-collapse: collapse;
      td, th {
        border: 1px solid #ddd;
        text-align: left;
        padding: 1rem;
      }
    }
  }

  &__button {
    @include input_reset;
    margin-top: 3rem;
    height: 50px;
    width: 220px;
    background-color: #D74339;
    color: #fff;
    font-weight: 500;
  }
}


@media (max-width: 1220px) {
  .product {
    &__title {
      margin-top: 4rem;
      font-size: 1.6rem;
    }
  }
}

@media (max-width: 1080px) {
  .product {
    &__title {
      margin-top: 3rem;
    }
    &__info {
      flex-direction: column;
      p {
        margin-top: 2rem;
        margin-left: 0;
        margin-left: 1rem;
      }
    }
    &__images {
      max-width: 100%;
      margin-right: 0;
    }
  }
}

@media (max-width: 550px) {
  .product {
    &__title {
      font-size: 1.2rem;
    }
    &__info {
      flex-direction: column;
      p {
        font-size: .9rem;
      }
    }
    &__characteristics {
      margin-top: 4rem;
      table {
        font-size: .9rem;
      }
    }
    &__button {
      font-size: .9rem;
    }
  }
}

</style>