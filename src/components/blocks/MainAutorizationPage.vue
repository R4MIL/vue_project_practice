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
import { ref } from 'vue'

export default {
  name: 'MainAutorizationPage',
  components: {
    AuthElement
  },
  props: {
  },
  setup () {
    const toggle = ref(false)
    const changeAuth = () => {
      toggle.value = !toggle.value
    }
    const clickAction = (data) => {
      console.log(data)
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
