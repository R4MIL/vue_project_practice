import ProductsData from '@/modules/products.json'

export default {
  state: {
    products: ProductsData,
    basketProducts: [],
    countProductsInBasket: 0,
    allPricePoductsInBasket: 0
  },
  getters: {
    getProducts: state => state.products,
    getBasketProducts: state => state.basketProducts,
    getCountProductsInBasket: state => state.countProductsInBasket,
    getAllPricePoductsInBasket: state => state.allPricePoductsInBasket
  },
  mutations: {
    SetAddBasketProducts (state, val) {
      const product = state.products.find(product => product.id === val)
      state.basketProducts.push(product)
      state.countProductsInBasket = state.basketProducts.length
      state.allPricePoductsInBasket = state.basketProducts.reduce((sum, item) => sum + item.price, 0)
    },
    SetDeleteBasketProducts (state, val) {
      state.basketProducts.splice(val, 1)
      state.countProductsInBasket = state.basketProducts.length
      state.allPricePoductsInBasket = state.basketProducts.reduce((sum, item) => sum + item.price, 0)
    },
    SetProductDescription (state, val) {
      const product = state.products.find(product => product.id === val)
      state.products = product
    },
    SetClearBasketProducts (state, val) {
      state.basketProducts = []
      state.countProductsInBasket = 0
      state.allPricePoductsInBasket = 0
    }
  },
  actions: {
  }
}
