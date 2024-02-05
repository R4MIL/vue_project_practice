<template>
    <div :class="{
      'product': true,
      'basket': basketList
    }">
        <img :src="preview" alt="image" class="product__image">
        <div :class="{
          'product__info': true,
          'basket__info': basketList
        }">
            <h2 :class="{
              'product__name': true,
              'basket__name': basketList
            }">{{name}}</h2>
            <p :class="{
              'product__description': true,
              'basket__description': basketList
            }">{{description}}</p>
        </div>
        <div :class="{
          'product__footer': true,
          'basket__footer': basketList
        }">
            <h2 :class="{
              'product__price': true,
              'basket__price': basketList
            }">{{`${price.toLocaleString()} ₽`}}</h2>
            <ButtionUI @click="$emit('clickButton')"
              :rotate="buttonRotate"
              :color="buttonColor"
            />
        </div>
    </div>
</template>

<script>
import ButtionUI from '@/components/ui/ButtonUI.vue'

export default {
  name: 'CardElement',
  components: {
    ButtionUI
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    preview: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
    imgHeight: {
      type: String,
      default: '271px'
    },
    imgWidth: {
      type: String,
      default: '270px'
    },
    basketList: {
      type: Boolean,
      default: false
    },
    buttonRotate: {
      type: String,
      default: '0deg'
    },
    buttonColor: {
      type: String,
      default: 'var(--color-main)'
    }
  },
  setup () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
    .product {
        width: 312px;
        height: 477px;
        border: 1px solid var(--color-dynamic);
        padding: 43px 0px 32px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: transparent;
        color: var(--color-main);
        font-size: 17px;
        font-weight: 500;
        &:hover {
            color: var(--color-dynamic);
        }
        &__image {
            width: v-bind(imgWidth);
            height: v-bind(imgHeight);
        }
        &__info {
            margin-top: 31px;
            width: 265px;
            display: flex;
            flex-direction: column;
            gap: 13px;
        }
        &__description {
            font-size: 14px;
            font-weight: 400;
        }
        &__footer {
            margin-top: auto;
            width: 270px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
    .basket {
      padding: 0;
      flex-direction: row;
      border: none;
      width: 895px;
      height: 130px;
      &__info {
        margin-top: 0;
        margin-left: 98px;
      }
      &__name {
        width: 310px;
      }
      &__description {
        display: none;
      }
      &__footer {
        margin-top: 0;
        margin-left: 262px;
        justify-content: center;
        gap: 15px;
      }
      &__price {
        width: 100px;
        text-align: right;
        color: var(--color-dynamic);
      }
    }
</style>
