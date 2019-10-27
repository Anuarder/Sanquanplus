<template>
  <div class="product">
    <div class="card" v-if="product">
      <img 
        :src="`http://localhost:3000/static/${product.images[0]}`" 
        class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">
          {{product.name.en}}
        </h5>
        <p 
          class="lead" 
          v-html="product.description.en">
        </p>
        <table 
          class="table table-striped"
          v-for="item in product.characteristics" 
          :key="item._id">
          <thead>
            <tr>
              <th v-for="head in item.headers" :key="head.value">
                {{head.name}}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(data, i) in item.data" :key="i">
              <td v-for="head in item.headers" :key="head.value">
                {{data[head.value].en}}
              </td>
            </tr>
          </tbody>
        </table>
        <div class="btn-group">
          <router-link 
            tag="button" 
            class="btn btn-info" 
            to="/product/edit">
            Редактировать
          </router-link>
          <button 
            type="button" 
            class="btn btn-danger">
            Удалить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex"
export default {
  computed: {
    ...mapGetters(['product'])
  },
  created(){
    this.getProductById(this.$route.params.id);
  },
  methods: {
    ...mapActions(['getProductById']),
    getData(data, head){
      if(data.value === head.value) {
        return data.name.en
      }
    }
  }
}
</script>