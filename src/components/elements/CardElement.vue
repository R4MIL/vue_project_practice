<template>
    <div class="product">
        <img :src="preview" alt="image" class="product__image">
        <div class="product__info">
            <h2 class="product__name">{{name}}</h2>
            <p class="product__description">{{description}}</p>
        </div>
        <div class="product__footer">
            <h2 class="product__price">{{`${price} ₽`}}</h2>
            <ButtionUI />
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
      type: String,
      default: ''
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
        border: 1px solid #D58C51;
        padding: 43px 0px 32px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: transparent;
        color: #FFF;
        font-size: 17px;
        font-weight: 500;
        &:hover {
            color: #D58C51;
        }
        &__image {
            width: 270px;
            height: 271px;
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
</style>
