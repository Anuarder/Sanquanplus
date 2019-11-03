<template>
  <div class="page">
    <v-sidebar></v-sidebar>
    <div class="catalog page-content">
      <div class="is-mobile">
        <v-navigation></v-navigation>
      </div>
      <div class="content">
        <div class="catalog__container">
          <div class="catalog__menu">
            <div class="catalog__navigation">
              <router-link to="/" active-class="colored" exact>Главная</router-link>
              <router-link to="/about" active-class="colored">О нас</router-link>
              <router-link to="/info" active-class="colored">Информация</router-link>
              <router-link to="/contacts" active-class="colored">Контакты</router-link>
            </div>
            <div class="catalog__links">
              <h1>Каталог</h1>
              <div v-for="(item, i) in categories" :key="item.id" class="catalog__link">
                <span>{{i+1}}</span>
                {{item.name.en}}
              </div>
            </div>
          </div>
          <div class="catalog__products">
            <div class="catalog__phones">
              <a href="#">
                +7(747) 736 58 84
                <span class="colored">Россия</span>
              </a>
              <a href="#">
                +7(747) 736 58 84
                <span class="colored">Казахстан</span>
              </a>
            </div>
            <div class="catalog__products-container">
              <v-product-card :product="product"></v-product-card>
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
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      product: {
        images: ["products/PSCS-35 Cutting &Sewing Machine for Woven Bags.png"],
        name: {
          en: "PSCS-35 Cutting &Sewing Machine for Woven Bags"
        }
      }
    };
  },
  created() {
    this.getCategories();
  },
  computed: {
    ...mapGetters(["categories"])
  },
  methods: {
    ...mapActions(["getCategories"])
  }
};
</script>
<style lang="scss" scoped>
@import "@/stylesheets/mixins.scss";

.is-mobile {
  display: none;
}

.catalog {
  &__container {
    display: flex;
    overflow: hidden;
  }

  &__menu {
    width: 40%;
    height: 100vh;
    overflow: auto;
    padding-left: 80px;
    background: #f3f2f0;

    &::-webkit-scrollbar {
      width: 2px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #e1e1e1;
      width: 2px;
      border-radius: 2px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }

  &__navigation {
    height: 70px;
    @include flex_vertical_end;
    a {
      margin-right: 3rem;
      font-weight: 500;
    }
  }
  &__phones {
    height: 70px;
    @include flex_vertical_end;
    justify-content: flex-end;
    a {
      margin-left: 3rem;
      font-weight: 500;
    }
  }

  &__links {
    margin-top: 5rem;
    width: 80%;
    font-size: 1.2rem;
    padding-bottom: 2rem;
    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }

  &__link {
    margin-top: 1.5rem;
    display: flex;
    span {
      width: 20px;
      margin-right: 1rem;
      font-weight: 500;
    }
  }

  &__products {
    padding-right: 80px;
    width: 60%;
    height: 100vh;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #e1e1e1;
      width: 4px;
      border-radius: 2px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &-container {
      padding: 0 2rem;
      margin-top: 5rem;
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: repeat(auto-fill, 250px);
      justify-content: center;
    }
  }
}

@media (max-width: 1530px) {
  .catalog {
    &__menu {
      padding-left: 70px;
      width: 45%;
    }

    &__products {
      width: 55%;
      padding-right: 70px;
    }

    &__navigation {
      a {
        margin-right: 2rem;
      }
    }
    &__phones {
      a {
        margin-left: 2rem;
      }
    }
    &__links {
      font-size: 1.1rem;
    }

    &__link {
      margin-top: 1.3rem;
    }
  }
}

@media (max-width: 1280px) {
  .catalog {
    &__navigation,
    &__phones {
      height: 60px;
    }
    &__products {
      &-container {
        grid-template-columns: repeat(auto-fill, 230px);
      }
    }
  }
}

@media (max-width: 1200px) {
  .catalog {
    &__menu {
      padding-left: 50px;
      width: 45%;
    }
    &__products {
      width: 55%;
      padding-right: 50px;
    }

    &__links {
      font-size: 1rem;
    }
  }
}

@media (max-width: 1140px) {
  .catalog {
    &__navigation,
    &__phones {
      font-size: 0.8rem;
    }
    &__products {
      &-container {
        grid-template-columns: repeat(auto-fill, 200px);
      }
    }
  }
}

@media (max-width: 1080px) {
  .is-mobile {
    display: block;
  }
  .catalog {
    background: #f3f2f0;
    &__navigation {
      display: none;
    }
    &__menu {
      width: 100%;
    }

    &__products {
      display: none;
    }
  }
}

@media (max-width: 550px) {
  .catalog {
    &__menu {
      padding-left: 25px;
      padding-right: 25px;
    }
    &__links {
      margin-top: 2rem;
      width: 100%;
      font-size: .9rem;
      h1 {
        font-size: 1.4rem;
      }
    }

    &__link {
      margin-top: 1.2rem;
    }
  }
}
</style>