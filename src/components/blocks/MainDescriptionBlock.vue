<template>
  <main class="container main">
    <CardElement class="main__card" v-for="(product) in products" :key="product.id"
      :name="product.name"
      :description="product.description"
      :price="product.price"
      :preview="require(`@/assets/images/${product.image}`)"
      imgHeight="503px"
      imgWidth="501px"
      descriptionItem
      buttonText="В корзину"
      buttonRectangle
      @clickButton="addToBasket(product.id)"
    />
  </main>
</template>

<script>
import CardElement from '@/components/elements/CardElement.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  name: 'MainDescriptionBlock',
  components: {
    CardElement
  },
  props: {
  },
  setup () {
    const store = useStore()
    const route = useRoute()

    const products = computed(() => {
      return store.getters.getProducts.filter(item => { return item.id === Number(route.params.id) })
    })
    const addToBasket = (id) => {
      store.commit('SetAddBasketProducts', id)
    }
    return {
      products,
      addToBasket
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    height: 100vh;
    background-image: url('@/assets/images/descriptionPage_background.png');
    display: flex;
    justify-content: center;

    &__card {
        margin-top: clamp(340px, calc(50vh - 186px / 2), 100vh);
    }
  }
</style>
