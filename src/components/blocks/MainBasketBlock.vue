<template>
  <main class="container main">
    <CardElement v-for="product in products" :key="product.id"
      :name="product.name"
      :description="product.description"
      :price="product.price"
      :preview="require(`@/assets/images/${product.image}`)"
      imgHeight="122px"
      imgWidth="122px"
      basketList
      buttonRotate="45deg"
      buttonColor="var(--color-dynamic)"
    />
  </main>
</template>

<script>
import CardElement from '@/components/elements/CardElement.vue'
import ProductsData from '@/assets/products.json'

export default {
  name: 'MainBasketBlock',
  components: {
    CardElement
  },
  props: {
  },
  setup () {
    const products = ProductsData.filter(item => { return [1, 3, 6].includes(item.id) })
    return {
      products
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
    }
</style>
