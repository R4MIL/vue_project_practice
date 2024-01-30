<template>
  <header :class="{
    'container': true,
    'header': true,
    'basket': basketList
  }">
    <router-link to="/" :class="{
      'header__button': true,
      'basket__button': basketList
    }">
      <ButtionUI
        text="←"
        color="var(--color-dynamic)"
      />
    </router-link>
    <h1 class="header__title">{{ title }}</h1>
    <div :class="{
      'header__action': true,
      'basket__action': basketList
    }">
        <div class="header__info">
            <p class="header__text">3 товара</p>
            <p class="header__text">на сумму 3 500 ₽</p>
        </div>
        <router-link to="/basket">
          <basketIcon />
        </router-link>
    </div>
  </header>
</template>

<script>
import basketIcon from '@/components/icons/basketIcon.vue'
import ButtionUI from '@/components/ui/ButtonUI.vue'

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
    title: {
      type: String,
      default: ''
    }
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
      &__action {
        display: none;
      }
      &__button {
        display: block;
      }
    }
</style>
