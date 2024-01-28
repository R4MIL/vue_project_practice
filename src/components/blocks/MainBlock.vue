<template>
  <main class="container main">
    <CardElement v-for="product in $products" :key="product.id"
      :name="product.name"
      :description="product.description"
      :price="product.price"
      :preview="require(`@/assets/images/${product.image}`)"
    />
  </main>
</template>

<script>
import CardElement from '@/components/elements/CardElement.vue'
import ProductsData from '@/assets/products.json'

export default {
  name: 'MainBlock',
  components: {
    CardElement
  },
  props: {
  },
  setup () {
    const $products = ProductsData
    return {
      $products
    }
  }
}
</script>

<style lang="scss" scoped>
    .main {
        background: #161516;
        padding: 27px 68px 67px 70px;
        display: flex;
        flex-wrap: wrap;
        row-gap: 35px;
        column-gap: 20px;
    }
</style>
