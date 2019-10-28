<template>
  <div class="navigation">
    <div class="navigation__actions">
      <div class="navigation__logo">
        <img src="@/assets/logo.png" alt="logo">
      </div>
      <div class="navigation__links">
        <router-link 
          class="navigation__link" 
          active-class="navigation__link--active"
          exact
          to="/">
          Главная
        </router-link>
        <router-link 
          class="navigation__link" 
          active-class="navigation__link--active" 
          to="/about">
          О нас
        </router-link>
        <router-link 
          class="navigation__link" 
          active-class="navigation__link--active" 
          to="/info">
          Информация
        </router-link>
        <router-link 
          class="navigation__link" 
          active-class="navigation__link--active" 
          to="/contacts">
          Контакты
        </router-link>
      </div>
    </div>
    <div class="navigation__contacts">
      <a href="#" class="navigation__contact">
        +7(747) 736 58 84
        <span class="color-red">Россия</span>
      </a>
      <a href="#" class="navigation__contact">
        +7(747) 736 58 84
        <span class="color-red">Казахстан</span>
      </a>
    </div>
  </div>
</template>