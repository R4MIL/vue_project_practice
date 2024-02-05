<template>
  <main class="container main">
    <CardElement v-for="product in products" :key="product.id"
      :name="product.name"
      :description="product.description"
      :price="product.price"
      :preview="require(`@/assets/images/${product.image}`)"
      @clickButton="addToBasket(product.id)"
    />
  </main>
</template>

<script>
import CardElement from '@/components/elements/CardElement.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'MainBlock',
  components: {
    CardElement
  },
  props: {
  },
  setup () {
    const store = useStore()
    const products = computed(() => {
      return store.getters.getProducts
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
        background: var(--color-main-background);
        padding: 27px 68px 67px 70px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        row-gap: 35px;
        column-gap: 20px;
        min-height: calc(100vh - 257px);
        height: 100%;
    }
</style>
