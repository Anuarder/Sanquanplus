<template>
  <div class="footer">
    <div class="footer__container">
        <div class="footer__links">
          <router-link to="/" active-class="footer__link--active" exact class="footer__link">
            Главная
          </router-link>
          <router-link to="/about" active-class="footer__link--active" class="footer__link">
            О нас
          </router-link>
          <router-link to="/info" active-class="footer__link--active" class="footer__link">
            Информация
          </router-link>
          <router-link to="/contacts" active-class="footer__link--active" class="footer__link">
            Контакты
          </router-link>
          <div class="footer__language-switch">
            <span class="color-red">Ру</span>/<span>En</span>
          </div>
        </div>
        <div class="footer__links">
          <div class="footer__title">
            Контакты
          </div>
          <a href="#" class="footer__contact">
            +7(747) 736 58 84
            <span class="color-red">Россия</span>
          </a>
          <a href="#" class="footer__contact">
            +7(747) 736 58 84
            <span class="color-red">Казахстан</span>
          </a>
        </div>
      <div class="footer__request">
        <a href="#">
          +7(747) 736 58 84   
          <br>
          <span class="color-red">Телефон горячей линии</span>
        </a>
        <button class="btn">
          Оставить заявку
        </button>
      </div>
    </div>
  </div>
</template>