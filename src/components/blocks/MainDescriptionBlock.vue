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
      :buttonText="basketProducts.find(data => data.id === product.id) ? 'Убрать из корзины' : 'В корзину'"
      buttonRectangle
      @clickButton="basketProducts.find(data => data.id === product.id) ? deleteFromBasket(product.id) : addToBasket(product.id)"
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
    const basketProducts = computed(() => {
      return store.getters.getBasketProducts
    })
    const addToBasket = (id) => {
      store.commit('SetAddBasketProducts', id)
    }
    const deleteFromBasket = (id) => {
      store.commit('SetDeleteBasketProducts', id)
    }
    return {
      products,
      basketProducts,
      addToBasket,
      deleteFromBasket
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
