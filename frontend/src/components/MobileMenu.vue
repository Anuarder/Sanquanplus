<template>
  <div class="mobile-menu">
    <div class="mobile-menu__close-container">
      <div class="mobile-menu__close" @click="close">
        <img src="../assets/close.svg" alt="close">
      </div>
    </div>
    <div class="mobile-menu__actions">
      <div class="mobile-menu__links">
        <router-link to="/" active-class="colored" exact @click.native="close">
          <span>01.</span>
          {{$t('home')}}
        </router-link>
        <router-link to="/about" active-class="colored" @click.native="close">
          <span>02.</span>
           {{$t('about')}}
        </router-link>
        <router-link to="/info" active-class="colored" @click.native="close">
          <span>03.</span>
           {{$t('information')}}
        </router-link>
        <router-link to="/contacts" active-class="colored" @click.native="close">
          <span>04.</span>
           {{$t('contacts')}}
        </router-link>
      </div>
      <div class="mobile-menu__phones">
        <hr>
        <a href="#">
          +7(747) 736 58 84 <span class="colored">{{$t('russia')}}</span>
        </a>
        <a href="#">
          +7(747) 736 58 84 <span class="colored"> {{$t('kazakhstan')}}</span>
        </a>
        <a @click="clickLanguage" class="pointer">
          <span :class="lang === 'En' ? 'colored' : ''">Ру</span>
            /
            <span :class="lang === 'Рус' ? 'colored' : ''">En</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import LangMixin from "../mixins/Lang"
export default {
  mixins: [LangMixin],
  methods: {
    close(){
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/stylesheets/mixins.scss";

.mobile-menu {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  background-color: #403C44;
  color: #fff;
  @include flex_column;

  &__close-container {
    @include flex_horizontal_end;
  }

  &__close {
    @include flex_center;
    width: 100px;
    height: 100px;
    background-color: #D74339;
  }

  &__actions {
    padding: 3rem;
    flex: 1;
    @include flex_column;
    justify-content: space-between;
  }

  &__links, &__phones {
    @include flex_column;
  }

  &__links {
    font-weight: 500;
    font-size: 2rem;
    a {
      margin-top: 2rem;
      letter-spacing: 1px;
      span {
        margin-right: 1rem;
        font-size: 70%;
        color: rgba(255, 255, 255, 0.418);
      }
    }
  }

  &__phones {
    font-size: 1.3rem;
    hr {
      margin-bottom: 2rem;
      width: 50%;
    }
    a {
      margin-bottom: 1rem;
    }
  }
}

@media (max-width: 550px) {
  .mobile-menu {
    &__close {
      width: 50px;
      height: 50px;
      img {
        max-width: 50%;
      }
    }
    &__actions {
      padding: 1.5rem;
    }
    &__links {
      font-size: 1.4rem;

      a{
        margin-top: 1.5rem;
        letter-spacing: 0;
        span {
          margin-right: .5rem;
        }
      }
    }

    &__phones {
      font-size: 1.1rem;
    }
  }
}
</style>