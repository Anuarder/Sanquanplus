export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    searchProducts(){
      this.search = false
      this.$router.push({ path: `/search/${this.text} ` });
    }
  }
}