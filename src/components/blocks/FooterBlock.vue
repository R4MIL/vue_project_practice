<template>
  <hr noshade size="1" color="#D58C51" style="margin: 0;">
  <footer class="container footer">
    <div class="footer__action">
        <div class="footer__info">
            <span>ЗАКАЗ НА СУММУ:</span>
            <span class="footer__amount">6 220 ₽</span>
        </div>
        <ButtionUI
        text="Оформить заказ"
        width="200px"
        height="42px"
        borderRadius="0%"
        background="var(--color-dynamic)"
        color="#131313"
        fontSize="14px"
        />
    </div>
  </footer>
</template>

<script>
import ButtionUI from '@/components/ui/ButtonUI.vue'

export default {
  name: 'FooterBlock',
  components: {
    ButtionUI
  },
  props: {
  },
  setup () {
    return {
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
