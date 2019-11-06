<template>
  <div class="page">
    <v-sidebar></v-sidebar>
    <div class="product page-content">
      <v-navigation></v-navigation>
      <div class="content">
        <div class="product__container container">
          <h1 class="product__title">
            {{product.name.en}}
          </h1>
          <div class="product__info">
            <div class="product__images">
              <!-- //TODO: Поставить обычный слайдер -->
              <!-- потому что может быть больше 3 фоток -->
              <img :src="`${api_link}/static/${product.images[0]}`">
            </div>
            <p 
              v-html="product.description.en">
            </p>
          </div>
          <div class="product__characteristics">
            <table 
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
          </div>
          <button class="product__button" @click="dialog = true">Оформить заказ</button>
        </div>
        <v-dialog
          v-if="dialog"
          :product="product"
          @close="dialog = false">
        </v-dialog>
      </div>
      <v-footer></v-footer>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import VDialog from '../components/Dialog'
export default {
  components: {
    VDialog
  },
  data() {
    return {
      dialog: false,
      product: {
        name: {
          en: "PSCS-35 Cutting &Sewing Machine for Woven Bags",
          ru: "PSCS-35 Cutting &Sewing Machine for Woven Bags"
        },
        images: [
          "products/PSCS-35 Cutting &Sewing Machine for Woven Bags.png",
          "products/PSCS-35 Cutting &Sewing Machine for Woven Bags.png",
          "products/PSCS-35 Cutting &Sewing Machine for Woven Bags.png",
        ],
        description: {
          en:
            "<ul> <li> Magnet Gripper for long life use (Innovative Gripper instead of traditional spring gripper) </li> <li> Two working position for circulation transferring by magnet gripper </li> <li> Servo controlling for cutting accuracy </li> <li> High-speed cutting and sewing </li> <li> Heat cutting with bag mouth open system equipped </li> <li> Edge position control(EPC) for winding and unwinding </li> <li> PLC operation control, digital display for operation monitor and operation setting </li> </ul>",
          ru:
            "<ul> <li> Magnet Gripper for long life use (Innovative Gripper instead of traditional spring gripper) </li> <li> Two working position for circulation transferring by magnet gripper </li> <li> Servo controlling for cutting accuracy </li> <li> High-speed cutting and sewing </li> <li> Heat cutting with bag mouth open system equipped </li> <li> Edge position control(EPC) for winding and unwinding </li> <li> PLC operation control, digital display for operation monitor and operation setting </li> </ul>"
        },
        characteristics: [
          {
            name: {
              en: "",
              ru: ""
            },
            headers: [
              {
                name: "Parameter",
                value: "parameter"
              },
              {
                name: "PSCS-35",
                value: "pscs-35"
              }
            ],
            data: [
              {
                parameter: {
                  en: "Max. Facbric Width",
                  ru: "Max. Facbric Width"
                },
                "pscs-35": {
                  en: "800mm",
                  ru: "800mm"
                }
              },
              {
                parameter: {
                  en: "Cutting Length",
                  ru: "Cutting Length"
                },
                "pscs-35": {
                  en: "350-1250mm",
                  ru: "350-1250mm"
                }
              },
              {
                parameter: {
                  en: "Cutting accutacy",
                  ru: "Cutting accutacy"
                },
                "pscs-35": {
                  en: "+1.5mm",
                  ru: "+1.5mm"
                }
              },
              {
                parameter: {
                  en: "Sewing Speed",
                  ru: "Sewing Speed"
                },
                "pscs-35": {
                  en: "35pcs/min",
                  ru: "35pcs/min"
                }
              },
              {
                parameter: {
                  en: "Stitch range",
                  ru: "Stitch range"
                },
                "pscs-35": {
                  en: "3.6-8mm",
                  ru: "3.6-8mm"
                }
              },
              {
                parameter: {
                  en: "Folding width",
                  ru: "Folding width"
                },
                "pscs-35": {
                  en: "15-25mm",
                  ru: "15-25mm"
                }
              }
            ]
          }
        ],
        category: "5dac803d1a69c80ec88f2cae",
        subcategory: null
      }
    };
  },
  computed: {
    ...mapState(['api_link'])
  }
};
</script>
<style lang="scss" scoped>
@import "@/stylesheets/mixins.scss";

.product {
  &__title {
    margin-top: 5rem;
    font-size: 1.8rem;
    font-weight: 500;
  }
  &__info {
    margin-top: 3rem;
    display: flex;

    p {
      font-size: 1.1rem;
      line-height: 170%;
      margin-left: 1rem;
    }
  }

  &__images {
    max-width: 45%;
    margin-right: 1.5rem;
    img {
      box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
    }
  }

  &__characteristics {
    margin-top: 5rem;
    table {
      width: 100%;
      border-collapse: collapse;
      td, th {
        border: 1px solid #ddd;
        text-align: left;
        padding: 1rem;
      }
    }
  }

  &__button {
    @include input_reset;
    margin-top: 3rem;
    height: 50px;
    width: 220px;
    background-color: #D74339;
    color: #fff;
    font-weight: 500;
  }
}


@media (max-width: 1220px) {
  .product {
    &__title {
      margin-top: 4rem;
      font-size: 1.6rem;
    }
  }
}

@media (max-width: 1080px) {
  .product {
    &__title {
      margin-top: 3rem;
    }
    &__info {
      flex-direction: column;
      p {
        margin-top: 2rem;
        margin-left: 0;
        margin-left: 1rem;
      }
    }
    &__images {
      max-width: 100%;
      margin-right: 0;
    }
  }
}

@media (max-width: 550px) {
  .product {
    &__title {
      font-size: 1.2rem;
    }
    &__info {
      flex-direction: column;
      p {
        font-size: .9rem;
      }
    }
    &__characteristics {
      margin-top: 4rem;
      table {
        font-size: .9rem;
      }
    }
    &__button {
      font-size: .9rem;
    }
  }
}

</style>