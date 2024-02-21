<template>
  <div class="container main">
    <AuthElement
      :isRegistration="toggle"
      @changeAuth="changeAuth"
      @clickAction="clickAction"
    />
  </div>
</template>

<script>
import AuthElement from '@/components/elements/AuthElement.vue'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'MainAutorizationPage',
  components: {
    AuthElement
  },
  props: {
  },
  setup () {
    const store = useStore()
    const router = useRouter()
    const toggle = ref(false)

    const changeAuth = () => {
      toggle.value = !toggle.value
    }
    const auth = computed(() => {
      return store.getters.getAuth
    })
    const clickAction = () => {
      if (toggle.value) {
        store.commit('SetRegistration')
        changeAuth()
      } else {
        store.commit('SetAutorization')
        if (auth.value) {
          router.push('/')
        }
      }
    }
    return {
      toggle,
      changeAuth,
      clickAction
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
