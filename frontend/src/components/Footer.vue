<template>
  <div class="footer">
    <div class="footer__container container">
      <div class="footer__contacts">
        <h1>Контакты</h1>
        <a href="#">
          +7(747) 736 58 84 <span class="colored">Россия</span>
        </a>
        <a href="#">
          +7(747) 736 58 84 <span class="colored">Казахстан</span>
        </a>
        <a href="#">
          E-mail: sanqanplas@gmail.com
        </a>
      </div>
      <div class="footer__actions">
        <a href="#">+7(747) 736 58 84</a>
        <span class="colored">
          Телефон горячей линии
        </span>
        <router-link to="/contacts" tag="button">
          Оставить заявку
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/stylesheets/mixins.scss";

.footer {
  margin-top: 10rem;
  background: #373334;
  color: #fff;
  padding: 5rem 2rem;
  
  &__container {
    @include flex_horizontal_between;
  }

  &__contacts, &__actions {
    @include flex_column;
    h1 {
      font-size: 1.2rem;
    }
    a, span {
      font-size: 1.1rem;
      font-weight: 300;
      margin-top: 1rem;
    }

    button {
      margin-top: 1rem;
      @include input_reset;
      height: 50px;
      background: #D74339;
    }
  }
}


@media (max-width: 1220px) {
  .footer {
    padding: 4rem 2rem;

    &__contacts, &__actions {
      @include flex_column;
      h1 {
        font-size: 1.1rem;
      }
      a, span {
        font-size: 1rem;
      }
    }
  }
}

@media (max-width: 730px) {
  .footer {
    margin-top: 5rem;
    padding: 3rem 1rem;

    &__contacts, &__actions {
      @include flex_column;
      h1 {
        font-size: 1rem;
      }
      a, span {
        margin-top: .6rem;
        font-size: .9rem;
      }
      button {
        height: 40px;
        font-size: .9rem;
      }
    }
  }
}

@media (max-width: 550px) {
  .footer {
    margin-top: 5rem;
    padding: 3rem 0;
    &__container {
      @include flex_horizontal_center;
      flex-direction: column;
      text-align: center;
      h1 {
        font-size: 1.1rem;
      }
      a, span {
        margin-top: .8rem;
        font-size: 1rem;
      }
      button {
        height: 50px;
        font-size: 1rem;
      }
    }
    &__actions {
      margin-top: 2rem;
    }
  }
}

</style>