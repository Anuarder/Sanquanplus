<template>
  <div class="sidebar">
    <router-link class="sidebar__catalog" to="/catalog">
      <h1>
        <img src="../assets/menu.svg" alt="menu">
        {{$t('catalog')}}
      </h1>
    </router-link>
    <div v-if="!search" class="sidebar__search" @click="search = true">
      <img src="../assets/search.svg" alt="search">
    </div>
    <div v-if="search" class="search-block">
      <div class="search-block__close">
        <img src="../assets/close.svg" alt="close" @click="search = false">
      </div>
      <div class="search-block__form">
        <form>
          <input type="text" :placeholder="$t('search')">
          <img src="../assets/search.svg" alt="search">
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: false
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/stylesheets/mixins.scss";

.sidebar {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 80px;
  left: 0; 
  z-index: 2;
  &__catalog {
    @include flex_center;
    height: 70%;
    background-color: #D74339;
    color: #fff;
    h1 {
      font-size: 1.3rem;
      font-weight: 300;
      @include flex_vertical_center;
      transform: rotate(-90deg);
      img {
        margin-right: 1rem;
      }
    }
  }
  &__search {
    @include flex_center;
    height: 30%;
    background: #373334;
  }
}

.search-block {
  position: fixed;
  background-color: #373334;
  left: 0;
  bottom: 0;
  top: 70%;
  width: 100%;
  &__close {
    position: absolute;
    right: 10%;
    top: 2rem;
  }

  &__form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    form {
      @include flex_center;
      border-bottom: 1px solid #fff;
      padding-bottom: 5px;
      input {
        width: 100%;
        @include input_reset;
        color: #fff;
        &::placeholder { 
          color: #fff;
          opacity: 1; 
        }
      }
    }
  }
}

@media (max-width: 1220px) {
  .sidebar {
    width: 60px;
    &__catalog {
      h1 {
        font-size: 1.1rem
      }
    }
  }
}

@media (max-width: 730px) {
  .sidebar {
    display: none;
  }
}
</style>