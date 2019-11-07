<template>
  <div class="dialog">
    <div class="dialog__container" v-on-clickaway="close">
      <div class="dialog__close">
        <img 
          src="../assets/close-black.svg" 
          alt="close" 
          @click="close">
      </div>
      <h1>
        {{$t('dialog.title')}}
      </h1>
      <h2>
        {{$t('dialog.text')}}
      </h2>
      <img :src="`${api_link}//static/${product.images[0]}`" :alt="product.name">
      <form>
        <input type="text" :placeholder="$t('first_name')">
        <input type="num" :placeholder="$t('phone')">
        <input type="email" placeholder="Email">
        <button type="submit">{{$t('send_request')}}</button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway';
export default {
  props: {
    product: Object
  },
   mixins: [ clickaway ],
  computed: {
    ...mapState(['api_link'])
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/stylesheets/mixins.scss";

.dialog {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  text-align: center;
  font-size: .9rem;
  &__container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    max-width: 400px;
    padding: 1rem;
  }
  &__close {
    @include flex_horizontal_end;
  }
  h1 {
    font-size: 1rem;
  }
  h2 {
    margin-top: 1rem;
    line-height: 150%;
    font-weight: 300;
  }
  img {
    margin-top: 1rem;
  }
  form {
    margin-top: 1rem;
    @include flex_column;
  }
  input {
    @include input_reset;
    border-bottom: 1px solid #ddd;
    padding: .6rem 1rem;
    margin-bottom: .6rem;
  }
  button {
    margin-top: 1rem;
    @include input_reset;
    padding: 1rem;
    color: #fff;
    font-weight: 500;
    background: #D74339;
  }
}
</style>