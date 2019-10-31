<template>
  <div class="about page">
    <v-sidebar></v-sidebar>
    <div class="container about__container">
      <v-navigation></v-navigation>
      <div class="about__content content">
        <div class="about__numbers">
          <h1 class="about__title">
            Почему мы?
          </h1>
          <div class="about__number about__number--first">
            <h1>
              20+
            </h1>
            <h2>
              Лет на рынке. <br>
              Работаем с 1999 года! <br>
              Опыт часть нашей компании
            </h2>
          </div>
          <div class="about__number about__number--second">
            <h1>
              85+
            </h1>
            <h2>
              Городах есть наши филиалы, <br>
              мы дорожим нашими <br>
              партнерами
            </h2>
          </div>
          <div class="about__number about__number--thrid">
            <h1>
              98%
            </h1>
            <h2>
              Довольных клиентов. <br>
              Товар высшего качества <br>
              работает годами!
            </h2>
          </div>
        </div>
        <div class="about__list">
          <div class="about__list-container">
            <div>
              <div class="about__list-item">
                <div class="about__list-count">
                  01.
                </div>
                <div class="about__list-text">
                  <h1>
                    Экономия денег
                  </h1>
                  <h2>
                    Разработка , производство поставка <br>
                    лицензионного товара по самым <br>
                    привлекательным ценам
                  </h2>
                </div>
              </div>
              <hr>
              <div class="about__list-item">
                <div class="about__list-count">
                  02.
                </div>
                <div class="about__list-text">
                  <h1>
                    Надежный поставщик
                  </h1>
                  <h2>
                    Разработка , производство поставка <br>
                    лицензионного товара по самым <br>
                    привлекательным ценам
                  </h2>
                </div>
              </div>
              <hr>
              <div class="about__list-item">
                <div class="about__list-count">
                  03.
                </div>
                <div class="about__list-text">
                  <h1>
                    Долгий срок службы
                  </h1>
                  <h2>
                    Срок службы не менее 20 лет. <br>
                    Качество обусловлено строгим контролем <br>
                    качества производства каждого изделия.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <router-link class="about__list-button" to="/catalog">
            Открыть каталог
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>