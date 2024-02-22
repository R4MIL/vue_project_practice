<template>
  <hr noshade size="1" color="#D58C51" style="margin: 0;">
  <footer class="container footer">
    <div class="footer__action">
      <div class="footer__info">
        <span>ЗАКАЗ НА СУММУ:</span>
        <span class="footer__amount">{{ productsAmount.toLocaleString() }} ₽</span>
      </div>
      <ButtionUI
        text="Оформить заказ"
        rectangle
        @click="modalOpen"
      />
    </div>
  </footer>
  <ModalUI
    text="Заказ успешно оформлен!"
    background="#000"
    :isVisible="isModalVisible"
    @cancel="modalClose"
  />
</template>

<script>
import ButtionUI from '@/components/ui/ButtonUI.vue'
import ModalUI from '@/components/ui/ModalUI.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'FooterBlock',
  components: {
    ButtionUI,
    ModalUI
  },
  props: {
  },
  setup () {
    const isModalVisible = ref(false)
    const store = useStore()
    const router = useRouter()

    const productsAmount = computed(() => {
      return store.getters.getAllPricePoductsInBasket
    })
    const modalOpen = () => {
      if (productsAmount.value !== 0) {
        isModalVisible.value = true
        store.commit('SetClearBasketProducts')
      }
    }
    const modalClose = () => {
      isModalVisible.value = false
      router.push('/')
    }
    return {
      isModalVisible,
      productsAmount,
      modalOpen,
      modalClose
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    background: var(--color-main-background);
    padding: 20px 0px 27px 0px;
    color: var(--color-main);
    display: flex;
    justify-content: center;
    &__action {
      width: 895px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &__info {
      display: flex;
      gap: 16px;
      align-items: center;
      font-size: 21px;
      font-weight: 400;
    }
    &__amount {
      color: var(--color-dynamic);
      font-size: 18px;
      font-weight: 400;
    }
  }
</style>
