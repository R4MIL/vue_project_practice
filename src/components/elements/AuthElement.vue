<template>
  <div class="auth">
    <p class="auth__title" @click="$emit('changeAuth')">{{ isRegistration ? 'Авторизоваться' : 'Зарегистрироваться' }}</p>
    <div class="auth__content">
      <h2 class="heading">{{ isRegistration ? 'РЕГИСТРАЦИЯ' : 'ВХОД' }}</h2>
      <div class="input">
        <div class="input__data">
          <input class="input__text"
            type="text"
            placeholder="Логин"
            v-model="formData.login"
          >
          <p class="input__error">{{ errorData.login }}</p>
          <input class="input__text"
            type="password"
            placeholder="Пароль"
            v-model="formData.password"
          >
          <p class="input__error">{{ errorData.password }}</p>
        </div>
        <div class="input__tools">
          <input class="input__checkbox"
            type="checkbox"
            id="checkbox"
            v-model="formData.isSendEmail"
          >
          <label for="checkbox">Я согласен получать обновления на почту</label>
        </div>
      </div>
      <p class="input__error input__error_center">{{ errorData.failed}}</p>
      <ButtionUI
        :text="isRegistration ? 'Зарегистрироваться' : 'Войти'"
        rectangle
        @click="$emit('clickAction')"
      />
    </div>
  </div>
</template>

<script>
import ButtionUI from '@/components/ui/ButtonUI.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'AuthElement',
  components: {
    ButtionUI
  },
  props: {
    isRegistration: {
      type: Boolean
    }
  },
  setup () {
    const store = useStore()
    const formData = computed(() => {
      return store.getters.getInputData
    })
    const errorData = computed(() => {
      return store.getters.getErrorData
    })

    return {
      formData,
      errorData
    }
  }
}
</script>

<style lang="scss" scoped>
  .auth {
    padding: 10px 20px 40px 20px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    &__title {
      margin-left: auto;
      font-size: 11px;
      font-weight: 300;
      line-height: 13px;
      color: var(--color-dynamic);
      text-decoration: underline;
      cursor: pointer;
    }
    &__content {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
    }
  }
  .heading {
    font-size: 31px;
    font-weight: 700;
    line-height: 38px;
  }
  .input {
    display: flex;
    flex-direction: column;
    &__data {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    &__tools {
      display: flex;
      align-items: center;
      font-size: 11px;
      font-weight: 300;
      line-height: 13px;
      gap: 3px;
    }
    &__text {
      width: 430px;
      height: 39px;
      border-radius: 61px;
      border: 1px solid var(--color-dynamic);
      font-size: 16px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0em;
      color: #161516;
      padding: 0px 15px 0px 15px;
    }
    &__checkbox {
      width: 13px;
      height: 13px;
      border-radius: 50%;
      vertical-align: middle;
      border: 1px solid var(--color-dynamic);
      appearance: none;
      -webkit-appearance: none;
      outline: none;
      cursor: pointer;
      background-color: #fff;
      &:checked {
          appearance: auto;
          clip-path: circle(50% at 50% 50%);
          accent-color: var(--color-dynamic);
      }
    }
    &__error {
      font-size: 8px;
      font-weight: 300;
      color: #FF0B0B;
      align-self: self-start;
      margin-left: 20px;
      height: 15px;
      &_center {
        margin-top: -22px;
        margin-bottom: -22px;
        margin-left: 0px;
        align-self: auto;
      }
    }
  }
</style>
