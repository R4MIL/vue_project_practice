import { createStore } from 'vuex'
import ProductsData from '@/assets/products.json'
import BasketProductsData from '@/assets/basket.json'

export default createStore({
  state: {
    products: ProductsData,
    basketProducts: BasketProductsData,
    countProductsInBasket: 3,
    allPricePoductsInBasket: 6220
  },
  getters: {
    getProducts: state => state.products,
    getBasketProducts: state => state.basketProducts,
    getCountProductsInBasket: state => state.countProductsInBasket,
    getAllPricePoductsInBasket: state => state.allPricePoductsInBasket
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
