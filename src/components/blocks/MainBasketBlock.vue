<template>
  <main class="container main">
    <CardElement v-for="(product,index) in basketProducts" :key="product.id"
      :name="product.name"
      :description="product.description"
      :price="product.price"
      :preview="require(`@/assets/images/${product.image}`)"
      imgHeight="122px"
      imgWidth="122px"
      basketList
      buttonRotate="45deg"
      buttonColor="var(--color-dynamic)"
      @clickButton="deleteFromBasket(index)"
    />
  </main>
</template>

<script>
import CardElement from '@/components/elements/CardElement.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'MainBasketBlock',
  components: {
    CardElement
  },
  props: {
  },
  setup () {
    const store = useStore()
    const basketProducts = computed(() => {
      return store.getters.getBasketProducts
    })
    const deleteFromBasket = (id) => {
      store.commit('SetDeleteBasketProducts', id)
    }
    return {
      basketProducts,
      deleteFromBasket
    }
  }
}
</script>

<style lang="scss" scoped>
    main {
        background: var(--color-main-background);
        padding: 38px 0px 102px 0px;
        color: var(--color-main);
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 31px;
        min-height: calc(100vh - 375px);
        height: 100%;
    }
</style>
