<template>
  <div class="page">
    <v-sidebar></v-sidebar>
    <div class="about page-content">
      <v-navigation></v-navigation>
      <div class="content">
        <div class="about__container container">
          <div class="about__title">Почему мы?</div>
          <div class="about__content">
            <div class="about__numbers">
              <div class="about__number about__number--first">
                <div>
                  <h1>20+</h1>
                  <h2>
                    Лет на рынке.
                    <br />Работаем с 1999 года!
                    <br />Опыт часть нашей компании
                  </h2>
                </div>
              </div>
              <div class="about__number about__number--second">
                <div>
                  <h1>85+</h1>
                  <h2>
                    Городах есть наши филиалы,
                    <br />мы дорожим нашими
                    <br />партнерами
                  </h2>
                </div>
              </div>
              <div class="about__number about__number--thrid">
                <div>
                  <h1>98%</h1>
                  <h2>
                    Довольных клиентов.
                    <br />Товар высшего качества
                    <br />работает годами!
                  </h2>
                </div>
              </div>
            </div>
            <div class="about__list">
              <div class="about__list-container">
                <div class="about__list-item">
                  <div class="about__list-count">01.</div>
                  <div class="about__list-text">
                    <h1>Экономия денег</h1>
                    <h2>
                      Разработка , производство поставка
                      <br />лицензионного товара по самым
                      <br />привлекательным ценам
                    </h2>
                  </div>
                </div>
                <hr />
                <div class="about__list-item">
                  <div class="about__list-count">02.</div>
                  <div class="about__list-text">
                    <h1>Надежный поставщик</h1>
                    <h2>
                      Разработка , производство поставка
                      <br />лицензионного товара по самым
                      <br />привлекательным ценам
                    </h2>
                  </div>
                </div>
                <hr />
                <div class="about__list-item">
                  <div class="about__list-count">03.</div>
                  <div class="about__list-text">
                    <h1>Долгий срок службы</h1>
                    <h2>
                      Срок службы не менее 20 лет.
                      <br />Качество обусловлено строгим контролем
                      <br />качества производства каждого изделия.
                    </h2>
                  </div>
                </div>
              </div>
              <router-link class="about__list-button" to="/catalog">Открыть каталог</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/stylesheets/mixins.scss";

.about {
  &__title {
    margin-top: 5rem;
    font-size: 1.8rem;
    font-weight: 500;
  }

  &__content {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
  }

  &__numbers {
    width: 50%;
  }

  &__number {
    h1 {
      font-size: 5rem;
      font-weight: 700;
      color: #d74339;
    }
    h2 {
      font-weight: 400;
      line-height: 150%;
    }

    &--first {
      @include flex_column;
      align-items: flex-start;
    }

    &--second {
      @include flex_column;
      align-items: center;
    }

    &--thrid {
      @include flex_column;
      align-items: flex-end;
    }
  }

  &__list {
    margin-top: -3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
    hr {
      margin: 2rem auto;
      border: none;
      height: 2px;
      background: #ddd;
    }

    &-item {
      display: flex;
    }

    &-count {
      font-size: 1.4rem;
      font-weight: 600;
      margin-right: 1rem;
      color: #ddd;
    }

    &-text {
      h1 {
        font-size: 1.4rem;
      }

      h2 {
        margin-top: 1.5rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 150%;
      }
    }

    &-button {
      margin-top: 3rem;
      font-size: 1.1rem;
      font-weight: 600;
      background: #373334;
      height: 70px;
      color: #fff;
      @include flex_center;
    }
  }
}


@media (max-width: 1220px) {
  .about {
    &__title {
      margin-top: 4rem;
      font-size: 1.6rem;
    }

    &__content {
      margin-top: 2rem;
    }

    &__numbers {
      width: 50%;
    }

    &__number {
      h1 {
        font-size: 4rem;
      }
    }

    &__list {
      margin-top: -2rem;
      width: 40%;
    }
  }
}

@media (max-width: 1080px) {
  .about {
    &__title {
      margin-top: 3rem;
    }
    
    &__content {
      margin-top: 3rem;
      flex-direction: column;
      justify-content: flex-start;
    }

    &__numbers {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    
    &__number {
      max-width: 30%;
      h1 {
        font-size: 3rem;
      }
      h2 {
        margin-top: 1rem;
        font-size: .9rem;
      }
    }

    &__list {
      margin-top: 4rem;
      width: 100%;
    }
    
  }
}


@media (max-width: 550px) {
  .about {
    &__content {
      margin-top: 2rem;
    }
    &__numbers {
      justify-content: flex-start;
      flex-direction: column;
    }
    &__number {
      max-width: 100%;
      margin-top: 2rem;
      br {
        display: none;
      }
      h1 {
        font-size: 3rem;
      }
      h2 {
        margin-top: 1rem;
        font-size: .9rem;
      }
      &--first {
        margin-top: 0;
      }
      &--first,
      &--second,
      &--thrid {
        align-items: flex-start;
      }
    }
  }
}

</style>