<template>
  <div :class="{
    'product': true,
    'basket': basketList,
    'description': descriptionItem

  }">
    <img :src="preview" alt="image" class="product__image">
    <div :class="{
      'product__content': true,
      'basket__content': basketList,
      'description__content': descriptionItem
    }">
      <div :class="{
        'product__info': true,
        'basket__info': basketList,
        'description__info': descriptionItem
      }">
        <h2 :class="{
          'product__name': true,
          'basket__name': basketList,
          'description__name': descriptionItem
        }">{{name}}</h2>
        <p :class="{
          'product__description': true,
          'basket__description': basketList
        }">{{description}}</p>
      </div>
      <div :class="{
        'product__footer': true,
        'basket__footer': basketList,
        'description__footer': descriptionItem
      }">
        <h2 :class="{
          'product__price': true,
          'basket__price': basketList,
          'description__price': descriptionItem
        }">{{`${price.toLocaleString()} ₽`}}</h2>
        <ButtionUI @click.stop="$emit('clickButton')"
          :rotate="buttonRotate"
          :color="buttonColor"
          :text="buttonText"
          :rectangle="buttonRectangle"
        />
      </div>
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
    descriptionItem: {
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
    },
    buttonRectangle: {
      type: Boolean,
      default: false
    },
    buttonText: {
      type: String,
      default: ''
    }
  },
  setup () {
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
    &__content {
      height: 100%;
      display: flex;
      flex-direction: column;
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
    &:hover {
      color: var(--color-main);
    }
    &__content {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 770px;
    }
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
  .description {
    padding: 0;
    flex-direction: row;
    border: none;
    width: 895px;
    height: 130px;
    &:hover {
      color: var(--color-main);
    }
    &__content {
      margin-left: 150px;
    }
    &__info {
      margin-top: 0;
      width: 400px;
      gap: 20px;
    }
    &__name {
      width: 400px;
      font-size: 30px;
      color: var(--color-dynamic);
    }
    &__footer {
      margin-top: 50px;
      justify-content: flex-start;
      gap: 100px;
      width: 100%;
    }
    &__price {
      text-align: start;
      font-size: 23px;
    }
  }
</style>
