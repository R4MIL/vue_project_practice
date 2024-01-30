<template>
  <HeaderBlock
    title="КОРЗИНА С ВЫБРАННЫМИ ТОВАРАМИ"
    basketList
  />
  <MainBasketBlock />
  <FooterBlock />
</template>

<script>
import HeaderBlock from '@/components/blocks/HeaderBlock.vue'
import MainBasketBlock from '@/components/blocks/MainBasketBlock.vue'
import FooterBlock from '@/components/blocks/FooterBlock.vue'

export default {
  name: 'BasketPage',
  components: {
    HeaderBlock,
    MainBasketBlock,
    FooterBlock
  },
  props: {
  },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
    .header {
      color: var(--color-main);
      background: var(--color-main-background);
      display: flex;
      align-items: center;
      gap: 63px;
      padding-top: 53px;
      &__title {
          font-size: 31px;
          font-weight: 700;
      }
    }
</style>
