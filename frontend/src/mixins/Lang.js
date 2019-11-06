import { mapState } from 'vuex'

export default {
  data() {
    return {
      lang: "En",
    }
  },
  computed: {
    ...mapState(['lang_val'])
  },
  mounted() {
    this.loadLanguage(localStorage.getItem('lang'));
  },
  methods: {
    setLanguage(value) {
      localStorage.setItem('lang', value);
      this.$i18n.locale = value;
      this.$store.commit('setLang', value);
    },
    loadLanguage(value) {
      if (value) {
        if (value == "en") {
          this.lang = "Рус";
        } else {
          this.lang = "En"
        }
        this.setLanguage(value);
      } else {
        const userLang = navigator.language || navigator.userLanguage;
        let lang = null;
        if (userLang == "ru-RU") {
          lang = "ru";
        } else {
          lang = "en";
        }
        this.setLanguage(lang);
      }
    },
    clickLanguage() {
      let language_value = "ru";
      if (this.lang == "En") {
        this.lang = "Рус";
        language_value = 'en';
      } else {
        this.lang = "En"
        language_value = 'ru'
      }
      this.setLanguage(language_value);
    }
  }
}