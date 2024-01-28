<template>
  <header class="container header">
    <h1 class="header__title">НАША ПРОДУКЦИЯ</h1>
    <div class="header__basket">
        <div class="header__info">
            <p class="header__text">3 товара</p>
            <p class="header__text">на сумму 3 500 ₽</p>
        </div>
        <basketIcon />
    </div>
  </header>
</template>

<script>
import basketIcon from '@/components/icons/basketIcon.vue'

export default {
  name: 'HeaderBlock',
  components: {
    basketIcon
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
    .header {
        padding: 54px 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #FFF;
        background: #161516;
        &__title {
            font-size: 31px;
            font-weight: 700;
        }
        &__basket {
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
    }
</style>
