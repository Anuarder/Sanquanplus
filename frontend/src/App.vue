<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="scss">
@import "@/stylesheets/mixins.scss";
* {
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  color: inherit;
}

img {
  max-width: 100%;
}

a {
  text-decoration: none;
  font-size: inherit;
  color: inherit;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

button,
a,
input,
select,
label {
  font-family: inherit;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.colored {
  color: #D42810;
}

.page {
  display: flex;
  max-width: 1920px;
  margin: 0 auto;
  height: 100vh;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
}

.page-content {
  width: calc(100% - 80px);
  min-height: 100vh;
  margin-left: 80px;
  @include flex_column;
  overflow: auto;
}
.pointer {
  cursor: pointer;
}
.content {
  flex: 1;
}

@media (max-width: 1220px) {
  .page-content {
    width: calc(100% - 60px);;
    margin-left: 60px;
  }
  
  .container {
    padding-left: 25px;
    padding-right: 25px;
  }
}

@media (max-width: 730px) {
  .page-content {
    width: 100%;
    margin-left: 0;
  }

  .container {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>