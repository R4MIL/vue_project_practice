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
                <input class="input__text"
                    type="password"
                    placeholder="Пароль"
                    v-model="formData.password"
                >
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
        <ButtionUI
          :text="isRegistration ? 'Зарегистрироваться' : 'Войти'"
          rectangle
          @click="$emit('clickAction',formData)"
        />
    </div>
  </div>
</template>

<script>
import ButtionUI from '@/components/ui/ButtonUI.vue'
import { ref } from 'vue'

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
    const formData = ref({
      login: '',
      password: '',
      isSendEmail: false
    })
    return {
      formData
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
        gap: 15px;
        &__data {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 15px;
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
    }
</style>
