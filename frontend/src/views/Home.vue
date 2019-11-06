<template>
  <div class="page">
    <v-sidebar></v-sidebar>
    <div class="home page-content">
      <v-navigation></v-navigation>
      <div class="content">
        <div class="home__container container">
          <div class="home__text">
            <h1 v-html="$t('home_page.title')">
            </h1>
            <h2>
              {{$t('home_page.subtitle')}}
            </h2>
          </div>
          <div class="home__buttons">
            <div class="home__button">
              {{$t('home_page.button1')}}
              <span>
                01
              </span>
            </div>
            <div class="home__button">
              {{$t('home_page.button2')}}
              <span>
                02
              </span>
            </div>
            <div class="home__button">
              {{$t('home_page.button3')}}
              <span>
                03
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/stylesheets/mixins.scss";

.home {
  overflow: auto;
  background-image: url('../assets/home.jpg');
  background-size: 70%;
  background-position: bottom right;
  background-repeat: no-repeat;
 
  &__container {
    @include flex_vertical_between;
    flex-direction: column;
    height: 100%;
  }

  &__text {
    @include flex_horizontal_center;
    height: 80%;
    flex-direction: column;
    h1 {
      font-size: 2.7rem;
      line-height: 100%;
      font-weight: 600;
    }

    h2 {
      margin-top: .7rem;
      font-size: 1.5rem;
      font-weight: 400;
    }
  }

  &__buttons {
    display: flex;
  }

  &__button {
    position: relative;
    background: #D74339;
    color: #fff;
    width: 280px;
    height: 90px;
    @include flex_center;
    margin-left: 1px;

    span {
      position: absolute;
      right: 0;
      bottom: 0;
      font-size: 4rem;
      font-weight: 600;
      opacity: .1;
    }
  }
}


@media (max-width: 1220px) {
  .home {
    &__text {
      h1 {
        font-size: 2.3rem;
      }
      h2 {
        font-size: 1.3rem;
      }
    }
    &__button {
      width: 230px;
      height: 70px;
      font-size: .8rem;
      span {
        font-size: 3rem;
      }
    }
  }
}

@media (max-width: 1080px) {
  .home {
    background-image: url('../assets/home-mobile.jpg');
    background-size: cover;
    background-position: left;

    &__text {
      margin-left: 2rem;
    }
  }
}

@media (max-width: 730px) {
 .home {
    &__text {
      h1 {
        font-size: 2rem;
      }
      h2 {
        font-size: 1.2rem;
      }
    }
    &__button {
      width: 100%;
      height: 60px;
      font-size: .6rem;
      span {
        font-size: 2rem;
      }
    }
  }
}

@media (max-width: 550px) {
 .home {
    &__text {
      margin-left: 1rem;
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: .9rem;
      }
    }
    &__buttons {
      flex-direction: column;
    }
    &__button {
      margin-top: .5rem;
      display: flex;
      justify-content: flex-start;
      padding: 0 1rem;
      width: 100%;
      height: 60px;
      font-size: 1.3rem;
      span {
        font-size: 3rem;
        padding: 0 1.5rem;
      }
    }
  }
}

@media (max-width: 400px) {
 .home {
    &__text {
      margin-left: 0;
      h1 {
        font-size: 1.4rem;
      }
      h2 {
        font-size: .8rem;
      }
    }
    &__button {
      font-size: 1.1rem;
    }
  }
}
</style>