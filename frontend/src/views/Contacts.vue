<template>
  <div class="contacts page">
    <v-sidebar></v-sidebar>
    <div class="container">
      <v-navigation></v-navigation>
      <div class="contacts__content content">
        <div class="contacts__form">
          <h1>
            Контакты
          </h1>
          <h2>
            Свяжитесь с нами
          </h2>
          <form>
            <div class="input-block">
              <input type="text" placeholder="Имя">
              <input type="text" placeholder="Фамилия">
            </div>
            <div class="input-block">
              <input type="email" placeholder="Email">
              <input type="text" placeholder="Телефон">
            </div>
            <div class="input-block">
              <textarea placeholder="Ваше сообщение"/>
            </div>
            <button class="btn">
              Отправить сообщение
            </button>
          </form>
        </div>
        <div class="contacts__info">
          <div>
            <h1>Контактные данные</h1>
            <a href="#">
              +7(747) 736 58 84 <span class="color-red">Россия</span>
            </a>
            <a href="#">
              +7(747) 736 58 84 <span class="color-red">Казахстан</span>
            </a>
            <a href="#">
              Веб-сайт: www.sanqanplas.ru
            </a>
            <a href="#">
              E-mail: sanqanplas@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>