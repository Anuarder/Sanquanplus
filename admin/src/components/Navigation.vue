<template>
  <nav class="navigation nav nav-pills nav-fill mt-4 mb-5">
    <router-link 
      class="nav-item nav-link"
      active-class="active"
      exact
      :to="{ name: 'products' }">
      Товары
    </router-link>
    <router-link 
      class="nav-item nav-link" 
      active-class="active"
      :to="{ name: 'categories' }">
      Категории
    </router-link>
  </nav>
</template>