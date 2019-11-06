<template>
  <div class="navigation">
    <div class="container is-desktop">
      <div class="navigation__container">
        <div class="navigation__logo">
          <img src="../assets/logo.png" alt="logo">
        </div>
        <div class="navigation__actions">
          <div class="navigation__links">
            <router-link to="/" active-class="colored" exact>
              {{$t('home')}}
            </router-link>
            <router-link to="/about" active-class="colored">
              {{$t('about')}}
            </router-link>
            <router-link to="/info" active-class="colored">
              {{$t('information')}}
            </router-link>
            <router-link to="/contacts" active-class="colored">
              {{$t('contacts')}}
            </router-link>
          </div>
          <div class="navigation__phones">
            <a href="#">
              +7(747) 736 58 84 <span class="colored">{{$t('russia')}}</span>
            </a>
            <a href="#">
              +7(747) 736 58 84 <span class="colored">{{$t('kazakhstan')}}</span>
            </a>
            <a class="navigation__languages" @click="clickLanguage">
              <span :class="lang === 'En' ? 'colored' : ''">Ру</span>
              /
              <span :class="lang === 'Рус' ? 'colored' : ''">En</span>
            </a>
          </div>
          <div class="navigation__sidebar" @click="sidebar = true">
            <img src="../assets/mobile-menu.svg" alt="menu">
          </div>
        </div>
      </div>
    </div>
    <div class="is-mobile">
      <div class="mnavigation">
        <router-link class="mnavigation__catalog" to="/catalog" tag="div">
          <img src="../assets/menu.svg" alt="menu">
        </router-link>
        <div class="mnavigation__actions">
          <div class="mnavigation__search">
            <form @submit.prevent="searchProducts">
              <img src="../assets/search.svg" alt="search">
              <input type="text" :placeholder="$t('search')" v-model.trim="text">
            </form>
          </div>
          <div class="mnavigation__sidebar" @click="sidebar = true">
            <img src="../assets/mobile-menu-white.svg" alt="menu">
          </div>
        </div>
      </div>
    </div>
    <v-mobile-menu 
      v-if="sidebar"
      @close="sidebar = false">
    </v-mobile-menu>
  </div>
</template>
<script>
import VMobileMenu from "./MobileMenu"
import LangMixin from "../mixins/Lang"
import SearchMixin from "../mixins/Search"
export default {
  mixins: [LangMixin, SearchMixin], 
  components: {
    VMobileMenu
  },
  data () {
    return {
      sidebar: false
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/stylesheets/mixins.scss";

.is-mobile {
  display: none;
}

.navigation {
  &__container {
    height: 70px;
    @include flex_vertical_end;
  }
  &__actions {
    @include flex_horizontal_between;
    align-items: flex-end;
    width: 100%;
    font-weight: 500;
  }
  &__sidebar {
    display: none;
  }
  &__languages {
    cursor: pointer;
  }
  &__logo {
    margin-right: 2rem;
  }
  &__links {
    a {
      margin-right: 3rem;
    }
  }
  &__phones {
    a {
      margin-left: 1rem;
    }
  }
}

.mnavigation {
  display: flex;

  &__catalog {
    width: 60px;
    height: 60px;
    @include flex_center;
    background: #D74339;
  }

  &__actions {
    flex: 1;
    @include flex_vertical_center;
    justify-content: space-between;
    background: #373334;
    padding: 0 1rem;
  }
  
  &__search {
    flex: 1;
    margin-right: 2rem;
    form {
      @include flex_vertical_center;
      width: 100%;
      img {
        max-width: 20px;
      }
    }
    input {
      background: #373334;
      border: none;
      width: 100%;
      outline: none;
      color: #fff;
      padding: 0 1rem;
      &::placeholder { 
        color: #fff;
        opacity: 1; 
      }
    }
  }
  &__sidebar {
    img {
      max-width: 25px;
    }
  }
}

@media (max-width: 1260px) {
  .navigation {
    &__links {
      a {
        margin-right: 2rem;
      }
    }
  }
}
@media (max-width: 1220px) {
  .navigation {
     &__container {
      height: 60px;
      font-size: .9rem;
      justify-content: flex-start;
    }
    &__logo {
      max-width: 70px;
    }
    &__links {
      a {
        margin-right: 2rem;
      }
    }
  }
}

@media (max-width: 1110px) {
  .navigation {
     &__container {
      height: 60px;
    }
    &__languages {
      display: none;
    }
    &__logo {
      max-width: 70px;
    }
    &__links {
      display: none;
    }
    &__sidebar {
      display: flex;
    }
  }
}

@media (max-width: 730px) {
  .is-desktop {
    display: none;
  }
  .is-mobile {
    display: block;
  }
}
</style>