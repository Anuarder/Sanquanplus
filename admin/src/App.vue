<template>
  <div id="app">
    <form class="input-group p-3">
      <input 
        type="text" 
        class="form-control" 
        placeholder="Search">
      <div class="input-group-append">
        <button 
          class="btn btn-outline-dark" 
          type="submit">
          Search
        </button>
      </div>
    </form>
    <div class="content p-3">
      <div class="content__categories">
        <v-categories></v-categories>
      </div>
      <div class="content__container ml-3">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import VCategories from "./components/Categories"
export default {
  components: {
    VCategories
  }
}
</script>
<style lang="scss">
.content {
  display: flex;

  &__categories {
    width: 30%;
  }

  &__container {
    width: 70%;
  }
}
.checkbox-container{
  display: flex;
  align-items: center;
  font-size: 1.1rem;
}
.checkbox {
  position: relative;
  width: 2.6rem;
  height: 1.4rem;
  -webkit-appearance: none;
  background-color: #a3a3a3;
  outline: none;
  border-radius: 1rem;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, .2);
  transition: .5s;
}

.checkbox:checked {
  background-color: #4CAF50;
}

.checkbox:before {
  content: '';
  position: absolute;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 1rem;
  top: 0;
  left: 0;
  transform: scale(1.1);
  transition: .2s;
  box-shadow: 0 3px 7px rgba(0, 0, 0, .2);
  background-color: #fff;
}

.checkbox:checked:before {
  left: 1.4rem;
}
</style>