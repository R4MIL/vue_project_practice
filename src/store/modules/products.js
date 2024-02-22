import ProductsData from '@/modules/products.json'

export default {
  state: {
    products: ProductsData,
    basketProducts: localStorage.getItem('basket') !== null ? JSON.parse(localStorage.basket) : [],
    countProductsInBasket: localStorage.getItem('basket') !== null ? JSON.parse(localStorage.basket).length : 0,
    allPricePoductsInBasket: localStorage.getItem('basket') !== null ? JSON.parse(localStorage.basket).reduce((sum, item) => sum + item.price, 0) : 0
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
      localStorage.setItem('basket', JSON.stringify(state.basketProducts))
      state.countProductsInBasket = state.basketProducts.length
      state.allPricePoductsInBasket = state.basketProducts.reduce((sum, item) => sum + item.price, 0)
    },
    SetDeleteBasketProducts (state, val) {
      state.basketProducts = state.basketProducts.filter(product => product.id !== val)
      localStorage.setItem('basket', JSON.stringify(state.basketProducts))
      state.countProductsInBasket = state.basketProducts.length
      state.allPricePoductsInBasket = state.basketProducts.reduce((sum, item) => sum + item.price, 0)
    },
    SetProductDescription (state, val) {
      const product = state.products.find(product => product.id === val)
      state.products = product
    },
    SetClearBasketProducts (state, val) {
      localStorage.removeItem('basket')
      state.basketProducts = []
      state.countProductsInBasket = 0
      state.allPricePoductsInBasket = 0
    }
  },
  actions: {
  }
}
