<template>
  <div class="page">
    <v-sidebar></v-sidebar>
    <div class="contacts page-content">
      <v-navigation></v-navigation>
      <div class="content">
        <div class="contacts__container container">
          <div class="contacts__title">
            {{$t('contacts')}}
          </div>
          <div class="contacts__content">
            <div class="contacts__form">
              <h1>{{$t('contact_us')}}</h1>
              <form>
                <div class="input-container">
                  <input type="text" :placeholder="$t('first_name')" required v-model="first_name">
                  <input type="text" :placeholder="$t('last_name')" required v-model="last_name">
                </div>
                <div class="input-container">
                  <input type="email" placeholder="E-mail" required v-model="email">
                  <input type="text" :placeholder="$t('phone')" required v-model="phone">
                </div>
                <div class="input-container">
                  <textarea :placeholder="$t('message')" required  v-model="message"/>
                </div>
                <button type="submit">
                  {{$t('send_message')}}
                </button>
              </form>
            </div>
            <div class="contacts__links">
              <h1>
                {{$t('contact_data')}}
              </h1>
              <a href="#">
                +7(747) 736 58 84 <span class="colored">{{$t('russia')}}</span>
              </a>
              <a href="#">
                +7(747) 736 58 84 <span class="colored">{{$t('kazakhstan')}}</span>
              </a>
              <a href="#">
                E-mail: sanqanplas@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <v-footer></v-footer>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      message: ''
    }
  },
  methods: {
    sendRequest() {
      this.$store.dispatch('sendRequest', {
        subject: 'Заявка с сайта sanquanplus',
        fullname: `${this.first_name} ${this.last_name}`,
        email: this.email,
        phone: this.phone,
        message: this.message
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/stylesheets/mixins.scss";

.contacts {
  &__title {
    margin-top: 5rem;
    font-size: 1.8rem;
    font-weight: 500;
  }

  &__content {
    margin-top: 3rem;
    display: flex;
  }

  &__form {
    width: 60%;
    h1 {
      font-size: 1.3rem;
      font-weight: 400;
    }
    form {
      margin-top: 2rem;
    }

    .input-container {
      margin-top: 3rem;
      display: flex;
      width: 100%;

      input, textarea {
        @include input_reset;
        height: 60px;
        border-bottom: 1px solid #2f2f2f;
        width: 100%;
      }

      input:first-child {
        margin-right: .6rem;
      }

    }
    button {
      margin-top: 3rem;
      @include input_reset;
      height: 60px;
      width: 250px;
      background: #D74339;
      color: #fff;
    }
  }

  &__links {
    text-align: right;
    align-items: flex-end;
    width: 40%;
    @include flex_column;
    h1 {
      font-size: 1.4rem;
    }

    a {
      margin-top: 2rem;
      font-size: 1.1rem;
    }
  }
}


@media (max-width: 1220px) {
  .contacts {
    &__title {
      margin-top: 4rem;
      font-size: 1.6rem;
    }

    &__form {
      h1 {
        font-size: 1.2rem;
      }
      .input-container {
        input, textarea {
          height: 50px;
        }
      }
    }
    &__links {
      h1 {
        font-size: 1.2rem;
      }
      a {
        margin-top: 2rem;
        font-size: 1rem;
      }
    }
  }
}

@media (max-width: 1080px) {
  .contacts {
    &__title {
      margin-top: 3rem;
    }
  }
}

@media (max-width: 900px) {
  .contacts {
    &__content {
      margin-top: 2rem;
    }
    &__form {
      h1 {
        font-size: 1.1rem;
      }
      .input-container {
        input, textarea {
          height: 40px;
        }
      }
    }
    &__links {
      h1 {
        font-size: 1.1rem;
      }
      a {
        margin-top: 1.5rem;
        font-size: .9rem;
      }
    }
  }
}


@media (max-width: 730px) {
  .contacts {
    &__content {
      flex-direction: column;
    }
    &__form {
      width: 100%;
    }
    &__links {
      display: none;
    }
  }
}

@media (max-width: 550px) {
  .contacts {
    &__form {
      .input-container {
        margin-top: 0;
        flex-direction: column;
        input, textarea {
          padding: 1rem;
          height: 70px;
          border-color: #ddd;
        }
        textarea {
          margin-top: 2rem;
          border: 1px solid #ddd;
          height: 100px;
        }
      }
      button {
        width: 100%;
      }
    }
  }
}
</style>