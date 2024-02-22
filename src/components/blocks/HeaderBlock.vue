<template>
  <header :class="{
    'container': true,
    'header': true,
    'basket': basketList,
    'description': descriptionItem
  }">
    <ButtionUI
      :class="{
        'header__button': true,
        'basket__button': basketList,
        'description__button': descriptionItem
      }"
      text="←"
      color="var(--color-dynamic)"
      @click="router.back()"
    />
    <h1 class="header__title">{{ title }}</h1>
    <div :class="{
      'header__action': true,
    }">
      <div :class="{
        'header__action': true,
        'basket__action': basketList
      }">
        <div class="header__info">
          <p class="header__text">{{ productsCount }} товара</p>
          <p class="header__text">на сумму {{ productsAmount.toLocaleString() }} ₽</p>
        </div>
        <router-link to="/basket">
          <basketIcon />
        </router-link>
      </div>
      <ButtionUI
        text="Выйти"
        rectangleActive
        @click="deautorization"
      />
    </div>
  </header>
</template>

<script>
import basketIcon from '@/components/icons/basketIcon.vue'
import ButtionUI from '@/components/ui/ButtonUI.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'HeaderBlock',
  components: {
    basketIcon,
    ButtionUI
  },
  props: {
    basketList: {
      type: Boolean,
      default: false
    },
    descriptionItem: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  setup () {
    const store = useStore()
    const router = useRouter()

    const productsAmount = computed(() => {
      return store.getters.getAllPricePoductsInBasket
    })
    const productsCount = computed(() => {
      return store.getters.getCountProductsInBasket
    })
    const deautorization = () => {
      store.commit('SetDeautorization')
      store.commit('SetClearBasketProducts')
      router.push('/auth')
    }
    return {
      router,
      productsAmount,
      productsCount,
      deautorization
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    padding: 54px 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-main);
    background: var(--color-main-background);
    &__title {
      font-size: 31px;
      font-weight: 700;
    }
    &__action {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    &__info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    &__text {
      font-size: 17px;
      font-weight: 500;
    }
    &__button {
      display: none;
    }
  }
  .basket {
    justify-content: center;
    gap: 63px;
    &__action {
      display: none;
    }
    &__button {
      display: inline-flex;
    }
  }

  .description {
    background: transparent;
    position: absolute;
    width: calc(100vw - 140px);
    &__button {
      display: inline-flex;
    }
  }
</style>
