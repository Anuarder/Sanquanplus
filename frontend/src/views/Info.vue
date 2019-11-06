<template>
  <div class="page">
    <v-sidebar></v-sidebar>
    <div class="info page-content">
      <v-navigation></v-navigation>
      <div class="content">
        <div class="info__container container">
          <div class="info__text">
            <h1>
              {{$t('info_page.title')}}
            </h1>
            <p>
              {{$t('info_page.text1')}}
            </p>
            <p>
              {{$t('info_page.text2')}}
            </p>
            <p>
              {{$t('info_page.text3')}}
            </p>
          </div>
        </div>
      </div>
      <v-footer></v-footer>
    </div>
  </div>
</template>
<style lang="scss" scoped>

.info {
  &__text {
    margin-top: 5rem;
    padding-bottom: 2rem;
    h1 {
      font-size: 1.8rem;
      font-weight: 500;
      margin-bottom: 3rem;
    }
    p {
      margin-top: 1.5rem;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 170%;    
    }
  }
}


@media (max-width: 1220px) {
  .info {
    &__text {
      margin-top: 4rem;
      h1 {
        font-size: 1.6rem;
      }
      p {
        font-size: 1.1rem;
      }
    }
  }
}

@media (max-width: 1080px) {
  .info {
    &__text {
      margin-top: 3rem;
    }
  }
}


@media (max-width: 550px) {
  .info {
    &__text {
      p {
        font-size: 1rem;
      }
    }
  }
}

</style>