<template>
  <div class="container main">
    <AuthElement
      :isRegistration="toggle"
      @changeAuth="changeAuth"
      @clickAction="clickAction"
    />
  </div>
  <ModalUI
    text="Вы успешно зарегистрированы!"
    background="#fff"
    :isVisible="isModalVisible"
    @cancel="modalClose"
  />
</template>

<script>
import AuthElement from '@/components/elements/AuthElement.vue'
import ModalUI from '@/components/ui/ModalUI.vue'
import { ref, computed, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'MainAutorizationPage',
  components: {
    AuthElement,
    ModalUI
  },
  props: {
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const toggle = ref(false)
    const isModalVisible = ref(false)

    const auth = computed(() => {
      return store.getters.getAuth
    })
    const errorData = computed(() => {
      return store.getters.getErrorData
    })
    onBeforeMount(() => {
      if (auth.value === 'true') {
        router.push('/')
      }
    })
    const changeAuth = () => {
      toggle.value = !toggle.value
      store.commit('SetClearData')
    }
    const clickAction = () => {
      if (toggle.value) {
        store.commit('SetRegistration')
        if (errorData.value.login === '' && errorData.value.password === '') {
          isModalVisible.value = true
          changeAuth()
        }
      } else {
        store.commit('SetAutorization')
        if (auth.value) {
          router.push('/')
        }
      }
    }
    const modalClose = () => {
      isModalVisible.value = false
    }
    return {
      toggle,
      isModalVisible,
      changeAuth,
      clickAction,
      modalClose
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    height: 100vh;
    background-image: url('@/assets/images/autorizationPage_background.png');
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
